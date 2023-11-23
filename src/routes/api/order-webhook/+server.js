// Import the database client from your db.js file
import { dbClient } from '$lib/server/db.js';
import { ordersTable } from '$lib/server/schema.js';

// GET request handler
export async function GET() {
    try {
        // Fetch new orders from the database that haven't been processed yet
        const orders = await dbClient.query(ordersTable.select('*').where('processed', false));

        // Optionally, you can update these orders as processed in a similar way as your Python script
        // ...

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
