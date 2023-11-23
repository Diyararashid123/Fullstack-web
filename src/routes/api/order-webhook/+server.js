// Import Supabase client
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL,SUPABASE_KEY } from "$env/static/private";
// Initialize Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// GET request handler
// GET request handler
export async function GET({ query }) {
    try {
        // Extract the user ID from the query parameter
        const userId = query.get('userId');

        // Check if there are any processed orders for the specific user
        let { data: orders, error } = await supabase
            .from('order')
            .select('processed')
            .eq('userId', userId)
            .eq('processed', true);

        if (error) {
            throw error;
        }

        // Determine if any orders are processed
        const isOrderProcessed = orders.length > 0;

        return new Response(JSON.stringify({ isOrderProcessed }), {
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

        // Process the webhook data
        console.log('Webhook Data:', webhookData);

        // Here, you can add logic based on the webhook data received
        // For example, update the status of an order, trigger other processes, etc.

        return new Response(null, { status: 200 });
    } catch (err) {
        // Handle any errors that occur
        return new Response(JSON.stringify({ error: err.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}
