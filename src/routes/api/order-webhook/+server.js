// src/routes/api/order/[orderId].js

export async function GET({ params }) {
    const { orderId } = params;
    console.log("Received request for order ID:", orderId);

    // Mock order data for testing
    const mockOrder = {
        id: orderId,
        // Add other mock fields as necessary
    };

    // Mock processed status
    const isProcessed = false; // Set this to true or false for testing

    // Return the mock order data and its processed status
    return new Response(JSON.stringify({
        order: mockOrder,
        processed: isProcessed,
        message: "Mock order data returned"
    }), {
        headers: { 'Content-Type': 'application/json' },
        status: 200
    });
}
