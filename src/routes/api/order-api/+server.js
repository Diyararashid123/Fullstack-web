
import { createClient } from '@supabase/supabase-js';
import {SUPABASE_KEY,SUPABASE_URL} from  '$env/static/private'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);



export async function GET() {
    try {
        let { data: orders, error } = await supabase.from('order').select('*');
        if (error) {
            throw error;
        }
        
        return new Response(JSON.stringify(orders), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
    } catch (err) {
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



        return new Response(null, { status: 200 });
    } catch (err) {
        // Handle any errors that occur
        return new Response(JSON.stringify({ error: err.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}