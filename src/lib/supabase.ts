import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;

export const getSupabaseClient = () => {
  if (!supabase) {
    if (!supabaseUrl || !supabaseAnonKey) {
      // This should not happen if the check in App.tsx is working
      console.error("Supabase URL and Anon Key must be defined to initialize the client.");
      return null;
    }
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabase;
};
