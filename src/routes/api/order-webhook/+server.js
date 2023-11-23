// src/routes/api/order/[orderId].js

// Import your existing database client setup here
import { dbClient } from '$lib/dbClient'; // Adjust this path as per your setup

export async function GET({ params }) {
    const { orderId } = params;

    try {
        // Fetch the order from the database
        const { data: order, error } = await dbClient
            .from('orders')
            .select('*')
            .eq('id', orderId)
            .single();

        if (error) throw error;

        // Return the order data and its processed status
        return new Response(JSON.stringify({
            order: order,
            processed: order ? order.processed : false
        }), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}
