import { dbClient } from '../../../lib/server/db.js';
import { processedOrdersTable } from '../../../lib/server/schema.js';
import { eq } from "drizzle-orm";

export const load = async ({ locals }) => {
 
  const session = await locals.auth.validate();
  console.log('Session in Load Function:', session);
  if (!session) {

    return {
      status: 401,
      body: {
        orderprocessed: []
      }
    };
  }
  

  const userId = session.user.userId;

  const orderprocessed = await dbClient
    .select()
    .from(processedOrdersTable)
    .where(eq(processedOrdersTable.userId, userId)) 
    .execute(); 

  return {
    body: {
      orderprocessed
    }
  };
};