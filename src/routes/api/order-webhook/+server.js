import { dbClient } from '$lib/server/db.js';
import { ordersTable } from '$lib/server/schema.js';

export async function GET() {
   
        // Fetch all orders from the database
        const orders = await dbClient
            .select('*')
            .from(ordersTable)
            .execute();

        return new Response(JSON.stringify(orders), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
    
}