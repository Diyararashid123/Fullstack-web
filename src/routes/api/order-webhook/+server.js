// Import the database client from your db.js file
import { dbClient } from '$lib/server/db.js';

// GET request handler
export async function GET() {
    try {
        // Directly query the 'order' table, using double quotes because 'order' is a reserved keyword
        const orders = await dbClient.sql`
            SELECT * FROM "order"
        `;

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
