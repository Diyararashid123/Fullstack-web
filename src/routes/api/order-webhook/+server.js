
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL,SUPABASE_KEY } from "$env/static/private";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function GET({ query }) {
    try {
        
        const userId = query.get('userId');

     
        let { data: orders, error } = await supabase
            .from('order')
            .select('processed')
            .eq('userId', userId)
            .eq('processed', true);

        if (error) {
            throw error;
        }

  
        const isOrderProcessed = orders.length > 0;

        return new Response(JSON.stringify({ isOrderProcessed }), {
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


export async function POST(request) {
    try {
       
        const webhookData = await request.json();

        console.log('Webhook Data:', webhookData);


        return new Response(null, { status: 200 });
    } catch (err) {
     
        return new Response(JSON.stringify({ error: err.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}
