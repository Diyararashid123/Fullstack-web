import { dbClient } from "$lib/server/db"
import { ordersTable, lettersTable } from "$lib/server/schema"

export const load = async()=>{
    const letters = await dbClient.select().from(lettersTable)
    return{
        letters
    }
}

export const actions = async (request) => {
    const orderData = JSON.parse(request.body);
    const orderId = generateOrderId(); // Function to generate unique order IDs

    // Assuming orderData has userId and letters
    const userId = orderData.userId;
    const lettersString = orderData.letters; // String like "ABBA"

    // Insert order data into the orders table
    await dbClient.insert(ordersTable, {
        orderId: orderId,
        userId: userId,
        letters: lettersString,
        orderDate: new Date(),
        // other fields...
    });

    return {
        status: 200,
        body: {
            message: "Order placed successfully"
        }
    };
};