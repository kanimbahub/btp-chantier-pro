import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://aktwkafyzrujqgvojolx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrdHdrYWZ5enJ1anFndm9qb2x4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM2OTY2MDAsImV4cCI6MjA4OTI3MjYwMH0.OLBuhijTx3lRK5VofjxmoplGgQ1UsxbgIs3igj2hGpM'
)

const { data, error } = await supabase.from('chantiers').select('*')

if (error) {
  console.log('❌ Erreur:', error.message)
} else {
  console.log('✅ Connexion OK!')
  console.log('📋 Chantiers trouvés:', data.length)
  console.log('🏗️  Premier chantier:', data[0].nom)
}
