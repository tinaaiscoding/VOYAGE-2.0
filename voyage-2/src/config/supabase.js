import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://npmxhddjylqvanqymibk.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY;

console.log(process.env)

export const supabase = createClient(supabaseUrl, supabaseKey)