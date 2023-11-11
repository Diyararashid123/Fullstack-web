// src/routes/auth/login/+page.server.js
import { auth } from '$lib/server/lucia';
import { LuciaError } from 'lucia';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        const username = formData.get('username');
        const password = formData.get('password');

        // Basic check
        if (
            typeof username !== 'string' ||
            username.length < 1 ||
            username.length > 31
        ) {
            return fail(400, {
                message: 'Invalid username'
            });
        }
        if (
            typeof password !== 'string' ||
            password.length < 1 ||
            password.length > 255
        ) {
            return fail(400, {
                message: 'Invalid password'
            });
        }

        try {
            // Find user by key and validate password
            const key = await auth.useKey(
                'username',
                username.toLowerCase(),
                password
            );
            const session = await auth.createSession({
                userId: key.userId,
                attributes: {}
            });
            locals.auth.setSession(session); // Set session cookie
        } catch (e) {
            if (
                e instanceof LuciaError &&
                (e.message === 'AUTH_INVALID_KEY_ID' ||
                    e.message === 'AUTH_INVALID_PASSWORD')
            ) {
                // User does not exist or invalid password
                return fail(400, {
                    message: 'Incorrect username or password'
                });
            }
            return fail(500, {
                message: 'An unknown error occurred'
            });
        }

        // Redirect to home page
        throw redirect(302, '/');
    }
};
