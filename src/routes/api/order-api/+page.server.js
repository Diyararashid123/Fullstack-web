
import { dbClient } from '../../../lib/server/db.js';
import { processedOrdersTable } from '../../../lib/server/schema.js';



export const load = async ({ locals }) => {
  const orderprocessed = await dbClient.select().from(processedOrdersTable);

  const session = await locals.auth.validate();
  if (!session) {
    return {
      status: 401,
      body: {
        orderprocessed: []
      }
    };
  }

  return {
    body: {
      orderprocessed
    }
  };
};
