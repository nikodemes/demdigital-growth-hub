-- Create table for newsletter signups
CREATE TABLE public.newsletter_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  source TEXT DEFAULT 'seo-scanner',
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.newsletter_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert their email (for newsletter signup)
CREATE POLICY "Anyone can sign up for newsletter" 
ON public.newsletter_signups 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reading (only admins should see the list)
CREATE POLICY "No public reading of newsletter signups" 
ON public.newsletter_signups 
FOR SELECT 
USING (false);

-- Create index for better performance on email lookups
CREATE INDEX idx_newsletter_signups_email ON public.newsletter_signups(email);
CREATE INDEX idx_newsletter_signups_created_at ON public.newsletter_signups(created_at DESC);