import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
  pgTable,
  serial,
  text,
  timestamp,
  uniqueIndex,
  integer,
} from 'drizzle-orm/pg-core';

 
export const UsersTable = pgTable(
  'users',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    createdAt: timestamp('createdAt').defaultNow().notNull(),
  },
  (users) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx').on(users.email),
    };
  },
);


export const ProductsTable = pgTable(
  'products',
  {
    id: serial('id').primaryKey(),
    name: text('name').notNull().unique(),
    description: text('description').notNull(),
    price: integer("price").notNull().default(0),
    image: text("image"),
  },
  (products) => {
    return {
      uniqueIdx: uniqueIndex('unique_idx1').on(products.id),
    };
  },
);

