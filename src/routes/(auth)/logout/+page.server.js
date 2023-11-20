import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';



export const load= async ({ locals }) => {
	const session = await locals.auth.validate();
	if (!session) throw redirect(302, '/login');
    await auth.invalidateSession(session.sessionId); 
    locals.auth.setSession(null); 
    throw redirect(302, '/login'); 
};