
// GET request handler
// Import the database client and schema
import { dbClient } from "$lib/server/db";
import { ordersTable } from "$lib/server/schema";

// GET request handler
export async function GET() {
    try {
        // Fetch all orders from the database
        console.log("Attempting to query the database");
        const orders = await dbClient.select('orderId').from(ordersTable).limit(10);
        console.log("Query executed", orders);
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

async function testDb() {
    try {
        const result = await dbClient.select('*').from(ordersTable);
        console.log(result);
    } catch (error) {
        console.error("Error testing DB", error);
    }
}

testDb();
