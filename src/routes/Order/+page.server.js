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
        const lettersArray = OrderContent.split('');
        const lettersString = lettersArray.join(','); 

        await dbClient.insert(ordersTable, {
            orderId: orderId,
            letters: lettersString,
            orderDate: new Date(),
        });

        return {
            status: 200,
            body: {
                message: "Order placed successfully"
            }
        };
    }
};