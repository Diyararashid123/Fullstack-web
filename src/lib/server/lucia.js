// src/lib/server/lucia.js
import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";
import { pg } from "@lucia-auth/adapter-postgresql";
import postgres from 'pg';
const DATABASE_URL = process.env.DATABASE_URL;

const pool = new postgres.Pool({
    connectionString: DATABASE_URL
});


export const auth = lucia({
    adapter: pg(pool, {
        user: "user",
        key: "user_key",
        session: "user_session"
    }),
    env: dev ? "DEV" : "PROD",
    middleware: sveltekit(),
    getUserAttributes: (data) => {
        return {
            username: data.username
        };
    }
});
