// src/routes/api/order/[orderId].js
import { dbClient } from '$lib/server/db.js';
import { ordersTable } from '$lib/server/schema.js';

export async function GET({ params }) {
    const { orderId } = params;

    try {
        // Construct the query
        const query = dbClient
            .select.from(ordersTable)
            .where(ordersTable.orderId.eq(orderId))
            .limit(1);

        // Execute the query
        const result = await query.execute();

        // Assuming the first row in the result is our order
        const order = result[0];

        if (!order) {
            throw new Error('Order not found');
        }

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
