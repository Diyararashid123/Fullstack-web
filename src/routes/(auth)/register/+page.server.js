// src/routes/signup/+page.server.js
import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        const username = formData.get('username');
        const password = formData.get('password');

        // Basic check
        if (
            typeof username !== 'string' ||
            username.length < 4 ||
            username.length > 31
        ) {
            return fail(400, {
                message: 'Invalid username'
            });
        }
        if (
            typeof password !== 'string'
        ) {
            return fail(400, {
                message: 'Invalid password'
            });
        }

        try {
            const user = await auth.createUser({
                key: {
                    providerId: 'username', // auth method
                    providerUserId: username.toLowerCase(), // unique id when using "username" auth method
                    password // hashed by Lucia
                },
                attributes: {
                    username
                }
            });
            const session = await auth.createSession({
                userId: user.userId,
                attributes: {}
            });
            console.log(session);
            locals.auth.setSession(session); // set session cookie
        } catch (e) {
            console.log(e);
            return fail(400, {
                message: 'Username already taken'
            });
        }

        // Redirect to home page
        throw redirect(302, '/');
    }
};
