// src/routes/api/order/[orderId].js
import { dbClient } from '$lib/server/db.js';
import { ordersTable } from '$lib/server/schema.js';

export async function GET({ params }) {
    const { orderId } = params;

    try {
        // Fetch the order from the database
        const orders = await dbClient
            .select()
            .from(ordersTable)
            .where(ordersTable.orderId.eq(orderId))
            .execute();

        const order = orders[0]; // Assuming the first result is the order we want

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
