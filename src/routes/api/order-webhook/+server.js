// src/routes/api/order/[orderId].js

export async function GET({ params }) {
    const { orderId } = params;
    console.log("Received request for order ID:", orderId);

    // Mock processed status for testing
    // Set this to true or false as per your test scenario
    const isProcessed = false;

    // Return only the processed status
    return new Response(JSON.stringify({
        orderId: orderId,
        processed: isProcessed
    }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200
    });
}
