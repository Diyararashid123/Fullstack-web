// Import the database client and schema
import { dbClient } from "$lib/server/db";
import { ordersTable } from "$lib/server/schema";

// GET request handler
export async function GET() {
    try {
        // Fetch all orders from the database
        const orders = await dbClient.select('*').from(ordersTable);

        return new Response(JSON.stringify(orders), {
            headers: { 'Content-Type': 'application/json' },
            status: 200
        });
    } catch (err) {
        // Handle any errors that occur during the fetch
        return new Response(JSON.stringify({ error: err.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}
