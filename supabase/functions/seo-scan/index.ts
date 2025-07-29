import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from '../_shared/cors.ts'

console.log("SEO Scan function starting...")

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { url } = await req.json()
    
    if (!url) {
      throw new Error('URL is required')
    }

    // Get PageSpeed Insights API key from environment
    const apiKey = Deno.env.get('PAGESPEED_API_KEY')
    if (!apiKey) {
      throw new Error('PageSpeed API key not configured')
    }

    // Analyze with Google PageSpeed Insights
    const pagespeedUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}&category=SEO&category=PERFORMANCE&category=ACCESSIBILITY&category=BEST_PRACTICES`
    
    const [pagespeedResponse, contentResponse] = await Promise.all([
      fetch(pagespeedUrl),
      fetch(url, { 
        headers: { 'User-Agent': 'Mozilla/5.0 (compatible; SEOBot/1.0)' }
      })
    ])

    if (!pagespeedResponse.ok) {
      throw new Error('Failed to fetch PageSpeed data')
    }

    const pagespeedData = await pagespeedResponse.json()
    const content = contentResponse.ok ? await contentResponse.text() : ''

    // Basic SEO analysis of content
    const seoAnalysis = analyzeContent(content, url)
    
    // Combine PageSpeed data with our analysis
    const results = {
      score: Math.round(pagespeedData.lighthouseResult.categories.seo.score * 100),
      issues: generateIssues(pagespeedData, seoAnalysis),
      performance: {
        fcp: pagespeedData.lighthouseResult.audits['first-contentful-paint']?.displayValue || 'N/A',
        lcp: pagespeedData.lighthouseResult.audits['largest-contentful-paint']?.displayValue || 'N/A',
        cls: pagespeedData.lighthouseResult.audits['cumulative-layout-shift']?.displayValue || 'N/A',
        speed: pagespeedData.lighthouseResult.audits['speed-index']?.displayValue || 'N/A',
        accessibility: Math.round(pagespeedData.lighthouseResult.categories.accessibility.score * 100),
        bestPractices: Math.round(pagespeedData.lighthouseResult.categories['best-practices'].score * 100),
        performanceScore: Math.round(pagespeedData.lighthouseResult.categories.performance.score * 100)
      },
      technical: {
        hasCanonical: seoAnalysis.hasCanonical,
        hasOpenGraph: seoAnalysis.hasOpenGraph,
        hasTwitterCard: seoAnalysis.hasTwitterCard,
        hasSchema: seoAnalysis.hasSchema,
        hasLang: seoAnalysis.hasLang,
        internalLinks: seoAnalysis.internalLinks,
        externalLinks: seoAnalysis.externalLinks,
        imageCount: seoAnalysis.imageCount,
        imagesWithoutAlt: seoAnalysis.imagesWithoutAlt
      },
      content: {
        wordCount: seoAnalysis.wordCount,
        titleLength: seoAnalysis.titleLength,
        metaDescLength: seoAnalysis.metaDescLength,
        h1Count: seoAnalysis.h1Count,
        h2Count: seoAnalysis.h2Count,
        h3Count: seoAnalysis.h3Count
      }
    }

    return new Response(
      JSON.stringify(results),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )

  } catch (error) {
    console.error('SEO scan error:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to scan website' 
      }),
      { 
        status: 400,
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json' 
        } 
      }
    )
  }
})

function analyzeContent(html: string, url: string) {
  const analysis = {
    hasTitle: /<title[^>]*>([^<]+)<\/title>/i.test(html),
    hasMetaDescription: /<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i.test(html),
    hasH1: /<h1[^>]*>([^<]+)<\/h1>/i.test(html),
    imageCount: (html.match(/<img[^>]*>/gi) || []).length,
    imagesWithoutAlt: (html.match(/<img(?![^>]*alt=)[^>]*>/gi) || []).length,
    hasSSL: url.startsWith('https://'),
    wordCount: html.replace(/<[^>]*>/g, '').split(/\s+/).length,
    
    // Advanced SEO checks
    hasCanonical: /<link[^>]*rel="canonical"[^>]*>/i.test(html),
    hasOpenGraph: /<meta[^>]*property="og:[^"]*"[^>]*>/i.test(html),
    hasTwitterCard: /<meta[^>]*name="twitter:[^"]*"[^>]*>/i.test(html),
    hasSchema: /<script[^>]*type="application\/ld\+json"[^>]*>/i.test(html),
    hasLang: /<html[^>]*lang="[^"]*"[^>]*>/i.test(html),
    
    // Link analysis
    internalLinks: (html.match(/<a[^>]*href="[^"]*"[^>]*>/gi) || []).filter(link => 
      link.includes(new URL(url).hostname) || link.includes('href="/')
    ).length,
    externalLinks: (html.match(/<a[^>]*href="https?:\/\/[^"]*"[^>]*>/gi) || []).filter(link => 
      !link.includes(new URL(url).hostname)
    ).length,
    
    // Heading structure
    h1Count: (html.match(/<h1[^>]*>/gi) || []).length,
    h2Count: (html.match(/<h2[^>]*>/gi) || []).length,
    h3Count: (html.match(/<h3[^>]*>/gi) || []).length,
    
    // Content quality
    titleLength: (html.match(/<title[^>]*>([^<]+)<\/title>/i)?.[1] || '').length,
    metaDescLength: (html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/i)?.[1] || '').length
  }
  
  return analysis
}

function generateIssues(pagespeedData: any, seoAnalysis: any) {
  const issues = []
  
  // Check PageSpeed audits
  const audits = pagespeedData.lighthouseResult.audits
  
  // Critical SEO Issues
  if (audits['meta-description']?.score === 0) {
    issues.push({
      type: 'error',
      title: 'Missing Meta Description',
      description: 'Your page is missing a meta description which is crucial for SEO rankings.'
    })
  } else if (seoAnalysis.metaDescLength < 120 || seoAnalysis.metaDescLength > 160) {
    issues.push({
      type: 'warning',
      title: 'Meta Description Length Issue',
      description: `Meta description is ${seoAnalysis.metaDescLength} characters. Optimal length is 120-160 characters.`
    })
  }
  
  if (audits['document-title']?.score === 0) {
    issues.push({
      type: 'error', 
      title: 'Missing or Poor Title Tag',
      description: 'Your page title is missing or not optimized for search engines.'
    })
  } else if (seoAnalysis.titleLength < 30 || seoAnalysis.titleLength > 60) {
    issues.push({
      type: 'warning',
      title: 'Title Tag Length Issue',
      description: `Title is ${seoAnalysis.titleLength} characters. Optimal length is 30-60 characters.`
    })
  }
  
  // Heading Structure Analysis
  if (seoAnalysis.h1Count === 0) {
    issues.push({
      type: 'error',
      title: 'Missing H1 Tag',
      description: 'Your page is missing an H1 tag, which is important for SEO structure.'
    })
  } else if (seoAnalysis.h1Count > 1) {
    issues.push({
      type: 'warning',
      title: 'Multiple H1 Tags',
      description: `Found ${seoAnalysis.h1Count} H1 tags. Best practice is to use only one H1 per page.`
    })
  } else {
    issues.push({
      type: 'success',
      title: 'Good Heading Structure',
      description: 'Your page has proper H1 tags for better content structure.'
    })
  }
  
  // Image Optimization
  if (audits['image-alt']?.score === 0 || seoAnalysis.imagesWithoutAlt > 0) {
    issues.push({
      type: 'warning',
      title: 'Images Missing Alt Text',
      description: `${seoAnalysis.imagesWithoutAlt} images are missing alt text, hurting accessibility and SEO.`
    })
  }
  
  // Performance Issues
  if (audits['first-contentful-paint']?.numericValue > 3000) {
    issues.push({
      type: 'warning',
      title: 'Slow Page Speed',
      description: `Your page takes ${audits['first-contentful-paint'].displayValue} to load. Aim for under 2.5s.`
    })
  }
  
  if (audits['largest-contentful-paint']?.numericValue > 4000) {
    issues.push({
      type: 'warning',
      title: 'Slow Largest Contentful Paint',
      description: `LCP is ${audits['largest-contentful-paint'].displayValue}. Should be under 2.5s for good user experience.`
    })
  }
  
  // Technical SEO
  if (!seoAnalysis.hasSSL) {
    issues.push({
      type: 'error',
      title: 'No SSL Certificate',
      description: 'Your website is not using HTTPS, which negatively impacts SEO rankings.'
    })
  } else {
    issues.push({
      type: 'success',
      title: 'HTTPS Enabled',
      description: 'Your website uses HTTPS, which is good for security and SEO.'
    })
  }
  
  if (!seoAnalysis.hasCanonical) {
    issues.push({
      type: 'warning',
      title: 'Missing Canonical Tag',
      description: 'No canonical URL specified. This can cause duplicate content issues.'
    })
  } else {
    issues.push({
      type: 'success',
      title: 'Canonical Tag Present',
      description: 'Canonical URL is properly specified.'
    })
  }
  
  if (!seoAnalysis.hasLang) {
    issues.push({
      type: 'warning',
      title: 'Missing Language Declaration',
      description: 'HTML lang attribute is missing, which affects accessibility and international SEO.'
    })
  }
  
  // Social Media & Rich Snippets
  if (!seoAnalysis.hasOpenGraph) {
    issues.push({
      type: 'warning',
      title: 'Missing Open Graph Tags',
      description: 'No Open Graph meta tags found. These improve social media sharing.'
    })
  } else {
    issues.push({
      type: 'success',
      title: 'Open Graph Tags Present',
      description: 'Your page has Open Graph tags for better social media sharing.'
    })
  }
  
  if (!seoAnalysis.hasTwitterCard) {
    issues.push({
      type: 'warning',
      title: 'Missing Twitter Card Tags',
      description: 'No Twitter Card meta tags found. These improve Twitter sharing.'
    })
  }
  
  if (!seoAnalysis.hasSchema) {
    issues.push({
      type: 'warning',
      title: 'No Structured Data',
      description: 'No JSON-LD structured data found. This helps search engines understand your content.'
    })
  } else {
    issues.push({
      type: 'success',
      title: 'Structured Data Present',
      description: 'JSON-LD structured data found, helping search engines understand your content.'
    })
  }
  
  // Mobile Optimization
  if (audits['viewport']?.score === 1) {
    issues.push({
      type: 'success',
      title: 'Mobile Friendly',
      description: 'Your website has a viewport meta tag and is mobile-optimized.'
    })
  } else {
    issues.push({
      type: 'error',
      title: 'Not Mobile Friendly',
      description: 'Your website lacks proper mobile optimization.'
    })
  }
  
  // Content Analysis
  if (seoAnalysis.wordCount < 300) {
    issues.push({
      type: 'warning',
      title: 'Low Content Volume',
      description: `Page has only ${seoAnalysis.wordCount} words. Consider adding more quality content (300+ words recommended).`
    })
  }
  
  // Link Analysis
  if (seoAnalysis.internalLinks === 0) {
    issues.push({
      type: 'warning',
      title: 'No Internal Links',
      description: 'No internal links found. Internal linking helps with site navigation and SEO.'
    })
  }
  
  return issues
}