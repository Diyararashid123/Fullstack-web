
import { createClient } from '@supabase/supabase-js';
import {SUPABASE_KEY,SUPABASE_URL} from  '$env/static/private'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);



export async function GET({ locals }) {
    try {
        // Ensure the user is authenticated
        const session = await locals.auth.validate();
        if (!session) {
            return new Response(JSON.stringify({ error: "Unauthorized" }), {
                status: 401,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Fetch orders for the logged-in user
        let { data: orders, error } = await supabase
            .from('order')
            .select('*')
            .eq('user_id', session.user.userId);

        if (error) {
            throw error;
        }

        return new Response(JSON.stringify(orders), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}


// POST request handler
export async function POST(request) {
    try {
        // Parse the incoming webhook data
        const webhookData = await request.json();


        return new Response(null, { status: 200 });
    } catch (err) {
        // Handle any errors that occur
        return new Response(JSON.stringify({ error: err.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}