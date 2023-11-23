// Import Drizzle ORM and your database client
import { dbClient } from '$lib/server/db.js';
import { ordersTable } from '$lib/server/schema.js';

// GET request handler
export async function GET() {
    try {
        // Fetch all orders from the database using Drizzle ORM
        const orders = await ordersTable.select(dbClient)
            .get();

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

// POST request handler
export async function POST(request) {
    try {
        // Parse the incoming webhook data
        const webhookData = await request.json();

        // Process the webhook data (e.g., log it, update the database, etc.)
        console.log('Webhook Data:', webhookData);

        // Here, you can add additional logic to handle the webhook data

        return new Response(null, { status: 200 });
    } catch (err) {
        // Handle any errors that occur
        return new Response(JSON.stringify({ error: err.message }), {
            headers: { 'Content-Type': 'application/json' },
            status: 500
        });
    }
}
