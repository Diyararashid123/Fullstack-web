// src/routes/api/order-webhook/+server.js

export async function POST(request) {
    try {
        const eventData = await request.json();

        // Check if 'processed' field exists and is true
        if (eventData.record && eventData.record.processed === true) {
            // Logic for when the order's 'processed' field is true
            console.log("Order processed:", eventData.record);

            // Here you can add any specific actions for a processed order
            // ...

            return new Response(JSON.stringify({
                status: 'success',
                message: 'Order processed',
                data: eventData.record  // Return the processed order data
            }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } else {
            // Handle the case where 'processed' is not true or the field is missing
            return new Response(JSON.stringify({
                status: 'success',
                message: 'Order not processed or processed field missing'
            }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
    } catch (error) {
        // Handle any errors that occur during processing
        console.error("Error processing webhook:", error);

        return new Response(JSON.stringify({
            status: 'error',
            message: 'Error processing webhook data'
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
