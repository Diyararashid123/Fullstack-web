import { dbClient } from "$lib/server/db"
import { ordersTable, lettersTable } from "$lib/server/schema"
import { v4 as uuidv4 } from 'uuid';
export const load = async()=>{
    const letters = await dbClient.select().from(lettersTable)
    return{
        letters
    }
}

async function fetchData() {
    const response = await fetch('/api/your-endpoint');
    const data = await response.json();
    
  }
export const actions = {
    default: async ({request, locals}) => {
        const data = await request.formData();
        const OrderContent = data.get("order-content")?.toString();
        const orderId = uuidv4(); 
        const session = await locals.auth.validate();
        if (!session) {
            return {
                status: 401, 
                body: {
                    message: "You must be logged in to place an order."
                }
            };
        }
        const username = session.user.username;
        const newOrder = {
            orderId: orderId,
            userId: session.user.userId,
            letters: OrderContent,
            username: username,
            orderDate: new Date(),
            processed: false
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