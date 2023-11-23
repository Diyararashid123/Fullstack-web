// src/routes/api/order/[orderId].js

// Import your existing database client setup here
import { dbClient } from '$lib/dbClient.js';


export async function GET({ params }) {
    const { orderId } = params;
    console.log("i was here");
        const { data: order, error } = await dbClient
            .from('orders')
            .select('*')
            .eq('id', orderId)
            .single();
                console.log(data);

        // Return the order data and its processed status
        return new Response(JSON.stringify({
            order: order,
            processed: order ? order.processed : false,
            message: "ITS RETURNED"
        }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
    } 

