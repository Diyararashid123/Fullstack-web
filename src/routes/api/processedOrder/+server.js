// src/routes/api/processedOrders/+server.js
import { dbClient } from '$lib/server/db';
import { processedOrdersTable } from '$lib/server/schema';

import { eq } from 'drizzle-orm';

export async function GET({ locals }) {

    const session = await locals.auth.validate();
    if (!session) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    const userId = session.user.userId;

    
    const processedOrders = await dbClient
        .select()
        .from(processedOrdersTable)
        .where(eq(processedOrdersTable.userId, userId))
        .execute();

    return new Response(JSON.stringify(processedOrders), {
        headers: { 'Content-Type': 'application/json' }
    });
}
