// src/routes/api/order/[orderId].js
import { dbClient } from '$lib/server/db.js'; // Adjust the path as necessary
import { ordersTable } from '$lib/server/schema.js';

export async function GET({ params }) {
    const { orderId } = params;

    try {
        // Fetch the order from the database
        const order = await dbClient
            .select(ordersTable.processed)
            .from(ordersTable)
            .where(ordersTable.orderId.eq(orderId))
            .execute()
            .then((result) => result[0]);

        if (!order) {
            throw new Error('Order not found');
        }

        // Return the processed status of the order
        return new Response(JSON.stringify({
            orderId: orderId,
            processed: order.processed
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
