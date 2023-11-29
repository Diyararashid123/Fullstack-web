// src/lib/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wolrwotpqfgrxtgpjljx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvbHJ3b3RwcWZncnh0Z3BqbGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk2NDQzNDMsImV4cCI6MjAxNTIyMDM0M30.gRkJ0nzQFEKciaVLRCD9aMWc-2Ufb6GYKP5RvM_1bW8'; // Replace with your 

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
