import { dbClient } from '../../../lib/server/db.js';
import { processedOrdersTable } from '../../../lib/server/schema.js';
import { eq } from "drizzle-orm";

export const load = async ({ locals }) => {
  // Validate the user session
  const session = await locals.auth.validate();
  if (!session) {
    // If there is no valid session, return a 401 status with an empty order list
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
