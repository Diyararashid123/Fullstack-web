// Import the database client from your db.js file
import { dbClient } from '$lib/server/db.js';

// GET request handler
export async function GET() {
    try {
        // Directly query the 'order' table for unprocessed orders
        const result = await dbClient.sql`
            SELECT * FROM "order"
        `;

        const orders = result.rows;

        // Optionally, mark these orders as processed, similar to your Python script
        // Loop through the orders and update their 'processed' status
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
