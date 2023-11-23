// src/routes/api/order-webhook/+server.js

export async function POST(request) {
    try {
        const eventData = await request.json();

        // Assuming 'eventData.record' contains the order data,
        // and 'eventData.record.processed' is the field we're interested in.
        const isProcessed = eventData.record?.processed;

        if (isProcessed === true) {
            console.log("Order processed:", eventData.record);
            // Add logic for processed order here (e.g., update application state, notify users)
            return new Response(JSON.stringify({
                status: 'success',
                message: 'Order processed',
                data: eventData.record  // Returning the processed order data
            }), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } else {
            console.log("Order not processed:", eventData.record);
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
