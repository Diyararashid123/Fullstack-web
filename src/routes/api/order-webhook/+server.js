// +server.js

// Import necessary libraries and initialize database client
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = 'https://wolrwotpqfgrxtgpjljx.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndvbHJ3b3RwcWZncnh0Z3BqbGp4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTY0NDM0MywiZXhwIjoyMDE1MjIwMzQzfQ.K3tvwnlJGoQzJ4vXoNNH2IdJ3VTVayFQtFNN5Pcr4I0'; // Replace with your Supabase Anon Key
const dbClient = createClient(supabaseUrl, supabaseKey);

// Define your orders table name
const ordersTable = 'orders'; // Replace with your actual orders table name

// GET request handler
export async function GET() {
    try {
        // Fetch all orders from the database
        const { data, error } = await dbClient
            .from(ordersTable)
            .select('*');

        if (error) {
            throw error;
        }

        return new Response(JSON.stringify(data), {
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

// POST request handler
export async function POST(request) {
    try {
        // Parse the incoming webhook data
        const webhookData = await request.json();

        // For demonstration, let's log the webhook data
        console.log('Webhook data received:', webhookData);

        // Here, you can process the webhook data as required

        // Return a success response
        return new Response(null, { status: 200 });
    } catch (err) {
        // Handle any errors that occur
        return new Response(JSON.stringify({ error: err.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}
