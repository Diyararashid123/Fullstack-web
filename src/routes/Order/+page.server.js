import { dbClient } from "$lib/server/db"
import { ordersTable, lettersTable } from "$lib/server/schema"

export const load = async()=>{
    const letters = await dbClient.select().from(lettersTable)
    return{
        letters
    }
}