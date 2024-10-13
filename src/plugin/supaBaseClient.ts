import { createClient } from '@supabase/supabase-js'

const API_KEY = import.meta.env.VITE_SUPABASE_API_KEY
const PROJECT_URL = import.meta.env.VITE_SUPABASE_PROJECT_URL

if (!API_KEY || !PROJECT_URL) {
  throw new Error('Missing environment variables')
}

const supaBaseClient = createClient(PROJECT_URL, API_KEY)

export default supaBaseClient
