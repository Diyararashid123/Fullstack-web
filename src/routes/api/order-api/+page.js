// src/routes/api/queue/+page.js
import { dbClient } from "$lib/server/db";
import { ordersTable } from "$lib/server/schema";

export async function load({ locals }) {
    const session = await locals.auth.validate();
    if (!session) {
        return { status: 401, body: { error: "Unauthorized" }};
    }

    const userId = session.user.userId;

    // Fetch all unprocessed orders, sorted by order_date
    const allUnprocessedOrders = await dbClient
        .select()
        .from(ordersTable)
        .where('processed', '=', false)
        .orderBy('order_date', 'asc') // Sort by order date
        .execute();

    // Find the position of the user's most recent order in this list
    let positionInQueue = allUnprocessedOrders.findIndex(order => order.userId === userId) + 1; 

    return { props: { positionInQueue }};
}
