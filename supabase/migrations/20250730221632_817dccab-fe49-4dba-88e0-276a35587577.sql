-- Create table to track every SEO scan usage
CREATE TABLE public.seo_scans (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  email TEXT NOT NULL,
  scan_results JSONB,
  scanned_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.seo_scans ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert scan records
CREATE POLICY "Anyone can create scan records" 
ON public.seo_scans 
FOR INSERT 
WITH CHECK (true);

-- Don't allow public reading of scan records for privacy
CREATE POLICY "No public reading of scan records" 
ON public.seo_scans 
FOR SELECT 
USING (false);

-- Add index for performance
CREATE INDEX idx_seo_scans_email ON public.seo_scans(email);
CREATE INDEX idx_seo_scans_url ON public.seo_scans(url);
CREATE INDEX idx_seo_scans_scanned_at ON public.seo_scans(scanned_at);