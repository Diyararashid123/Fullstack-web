// src/routes/api/webhook.js

export async function post(request) {
  try {
      const eventData = await request.json();

      // Process the webhook data
      console.log("Webhook received:", eventData);

      // Here, you can add logic based on the event data
      // For example, update application state, send emails, etc.

      return new Response(JSON.stringify({
          status: 'success',
          message: 'Webhook data processed'
      }), {
          headers: {
              'Content-Type': 'application/json'
          }
      });
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
