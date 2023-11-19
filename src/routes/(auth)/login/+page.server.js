// src/routes/auth/login/+page.server.js
import { auth } from '$lib/server/lucia';
import { LuciaError } from 'lucia';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
    default: async ({ request, locals }) => {
        const formData = await request.formData();
        const username = formData.get('username');
        const password = formData.get('password');
        console.log("Login attempt:", username); 
        // Basic check
        if (
            typeof username !== 'string' ||
            username.length < 1 ||
            username.length > 31
        ) {
            console.log("Login failed: Invalid username format");
            return fail(400, {
                message: 'Invalid username'
            });
        }
        if (
            typeof password !== 'string' ||
            password.length < 1 ||
            password.length > 255
        ) {
            console.log("Login failed: Invalid password format");
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

            console.log("User found, creating session for:", key.userId);
            const session = await auth.createSession({
                userId: key.userId,
                attributes: {}
              });
              console.log("Session created:", session);
              locals.auth.setSession(session); 
              console.log("Session cookie set, redirecting to home");
        } catch (e) {
            console.log("Login error:", e);
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

      
        throw redirect(302, '/');
    }
};
