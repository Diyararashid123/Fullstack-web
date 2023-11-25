// Import the necessary modules
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { DATABASE_URL, SUPABASE_URL,SUPABASE_KEY } from '$env/static/private';

// Set up the connection string
const connectionString = DATABASE_URL;


// Create the database client
const supabaseClient = postgres(connectionString);

// Export the Drizzle client
export const dbClient = drizzle(supabaseClient);
