// src/routes/api/queue/+page.server.js
import { auth } from "$lib/server/lucia";
import { dbClient } from "$lib/server/db";
import { ordersTable } from "$lib/server/schema";
import { asc, eq } from "drizzle-orm";

export async function load({ locals }) {
    const session = await auth.validateRequest(locals.request);
    if (!session) {
        return { status: 401, body: { error: "Unauthorized" }};
    }

    const userId = session.user.userId;

    // Fetch all unprocessed orders for the user, sorted by order date
    const userOrders = await dbClient
        .select()
        .from(ordersTable)
        .where(eq(ordersTable.userId, userId), eq(ordersTable.processed, false))
        .orderBy(asc(ordersTable.orderDate))
        .execute();

    return { data: userOrders }; 
}
