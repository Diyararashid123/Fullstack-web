
import { error } from '@sveltejs/kit';

// Function to handle GET requests
// src/routes/your-route/+page.server.js
import { dbClient } from '$lib/server/db';
import { lettersTable } from '$lib/server/schema';

export async function load() {
    try {
        const letters = await dbClient.selectFrom(lettersTable)
                                      .selectAll()
                                      .execute();
        return { props: { letters } };
    } catch (err) {
        console.error('Error fetching letters:', err);
        return { props: { error: 'Failed to fetch letters' } };
    }
}


// Actions for handling form submissions
export const actions = {
    async order({ request }) {
        try {
            const formData = await request.formData();
            const userId = formData.get('userId');
            const letterId = formData.get('letterId');
            const quantityOrdered = parseInt(formData.get('quantityOrdered'), 10);

            // Start a transaction for order processing
            await db.transaction(async (trx) => {
                const letter = await trx.selectFrom(lettersTable)
                                       .select('quantity')
                                       .where('id', '=', letterId)
                                       .executeTakeFirstOrThrow();

                if (letter.quantity < quantityOrdered) {
                    throw error(400, 'Not enough quantity available');
                }

                await trx.updateTable(lettersTable)
                         .set({ quantity: letter.quantity - quantityOrdered })
                         .where('id', '=', letterId)
                         .execute();

                await trx.insertInto(ordersTable)
                         .values({
                             userId: userId,
                             letterId: letterId,
                             quantityOrdered: quantityOrdered,
                             orderDate: new Date()
                         })
                         .execute();
            });

            // Redirect after successful POST
            return { location: '/success-page' }; 
        } catch (err) {
            console.error('Error processing order:', err);
            return { error: 'Failed to process order' };
        }
    }
};
