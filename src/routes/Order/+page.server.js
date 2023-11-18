import { dbClient } from "$lib/server/db"
import { ordersTable, lettersTable } from "$lib/server/schema"
import { v4 as uuidv4 } from 'uuid';
export const load = async()=>{
    const letters = await dbClient.select().from(lettersTable)
    return{
        letters
    }
}
export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const OrderContent = data.get("order-content")?.toString();
        const orderId = uuidv4(); 
       
        const newOrder = {
            orderId: orderId,
            letters: OrderContent,
            orderDate: new Date()
        }
        const insert = await dbClient.insert(ordersTable).values(newOrder)

        return {
            status: 200,
            body: {
                message: "Order placed successfully"
            }
        };
    }
};