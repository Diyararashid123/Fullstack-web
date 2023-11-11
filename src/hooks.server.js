// src/hooks.server.js
import { auth } from '$lib/server/lucia';

export const handle = async ({ event, resolve }) => {
    // Pass `event` to the auth handler
    event.locals.auth = auth.handleRequest(event);
    return await resolve(event);
};