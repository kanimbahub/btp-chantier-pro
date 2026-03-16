import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://aktwkafyzrujqgvojolx.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrdHdrYWZ5enJ1anFndm9qb2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2OTY2MDAsImV4cCI6MjA4OTI3MjYwMH0.OLBuhijTx3lRK5VofjxmoplGgQ1UsxbgIs3igj2hGpM'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
