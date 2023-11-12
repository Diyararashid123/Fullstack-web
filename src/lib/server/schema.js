// src/lib/server/schema.js
import { pgTable, bigint, varchar, integer, timestamp } from "drizzle-orm/pg-core";


export const usersTable = pgTable("user", {
    id: varchar("id", {
        length: 15 // change this when using custom user ids
    }).primaryKey(),
    // other user attributes
    username: varchar("username",{
        length: 24
    }).notNull().unique()
});

export const sessionsTable = pgTable("user_session", {
    id: varchar("id", {
        length: 128
    }).primaryKey(),
    userId: varchar("user_id", {
        length: 15
    })
    .notNull()
    .references(() => usersTable.id),
    activeExpires: bigint("active_expires", {
        mode: "number"
    }).notNull(),
    idleExpires: bigint("idle_expires", {
        mode: "number"
    }).notNull()
});

export const keysTable = pgTable("user_key", {
    id: varchar("id", {
        length: 255
    }).primaryKey(),
    userId: varchar("user_id", {
        length: 15
    })
    .notNull()
    .references(() => usersTable.id),
    hashedPassword: varchar("hashed_password", {
        length: 255
    })
});

export const lettersTable = pgTable("letters", {
    id: integer("id").primaryKey(),
    letter: varchar("letter", {
        length: 1
    }).notNull(),
    quantity: integer("quantity").notNull()
});


export const ordersTable = pgTable("orders", {
    id: integer("id").primaryKey(),
    userId: varchar("user_id", {
        length: 15
    }).notNull().references(() => usersTable.id),
    letterId: integer("letter_id").notNull().references(() => lettersTable.id),
    orderDate: timestamp("order_date").defaultNow(),
    quantityOrdered: integer("quantity_ordered").notNull()
});
