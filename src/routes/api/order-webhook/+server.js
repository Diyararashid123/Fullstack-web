// Import Supabase client
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://wolrwotpqfgrxtgpjljx.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvbHJ3b3RwcWZncnh0Z3BqbGp4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTY0NDM0MywiZXhwIjoyMDE1MjIwMzQzfQ.K3tvwnlJGoQzJ4vXoNNH2IdJ3VTVayFQtFNN5Pcr4I0; // Replace with your Supabase Anon Key'
const supabase = createClient(supabaseUrl, supabaseKey);

// GET request handler
export async function GET() {
    try {
        // Fetch all orders from the Supabase 'order' table
        let { data: orders, error } = await supabase
            .from('order')
            .select('*');

        if (error) {
            throw error;
        }

        return new Response(JSON.stringify(orders), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
    } catch (err) {
        // Handle any errors that occur during the fetch
        return new Response(JSON.stringify({ error: err.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}
