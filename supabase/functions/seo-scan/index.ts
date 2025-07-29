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
        speed: pagespeedData.lighthouseResult.audits['speed-index']?.displayValue || 'N/A'
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
    wordCount: html.replace(/<[^>]*>/g, '').split(/\s+/).length
  }
  
  return analysis
}

function generateIssues(pagespeedData: any, seoAnalysis: any) {
  const issues = []
  
  // Check PageSpeed audits
  const audits = pagespeedData.lighthouseResult.audits
  
  if (audits['meta-description']?.score === 0) {
    issues.push({
      type: 'error',
      title: 'Missing Meta Description',
      description: 'Your page is missing a meta description which is crucial for SEO rankings.'
    })
  }
  
  if (audits['document-title']?.score === 0) {
    issues.push({
      type: 'error', 
      title: 'Missing or Poor Title Tag',
      description: 'Your page title is missing or not optimized for search engines.'
    })
  }
  
  if (audits['image-alt']?.score === 0) {
    issues.push({
      type: 'warning',
      title: 'Images Missing Alt Text',
      description: `${seoAnalysis.imagesWithoutAlt} images are missing alt text, hurting accessibility and SEO.`
    })
  }
  
  if (audits['first-contentful-paint']?.numericValue > 3000) {
    issues.push({
      type: 'warning',
      title: 'Slow Page Speed',
      description: `Your page takes ${audits['first-contentful-paint'].displayValue} to load. Aim for under 2.5s.`
    })
  }
  
  if (!seoAnalysis.hasSSL) {
    issues.push({
      type: 'error',
      title: 'No SSL Certificate',
      description: 'Your website is not using HTTPS, which negatively impacts SEO rankings.'
    })
  }
  
  if (audits['is-on-https']?.score === 1) {
    issues.push({
      type: 'success',
      title: 'HTTPS Enabled',
      description: 'Your website uses HTTPS, which is good for security and SEO.'
    })
  }
  
  if (audits['viewport']?.score === 1) {
    issues.push({
      type: 'success',
      title: 'Mobile Friendly',
      description: 'Your website has a viewport meta tag and is mobile-optimized.'
    })
  }
  
  if (seoAnalysis.hasH1) {
    issues.push({
      type: 'success',
      title: 'Good Heading Structure',
      description: 'Your page has proper H1 tags for better content structure.'
    })
  }
  
  return issues
}