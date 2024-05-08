import '@/drizzle/envConfig';
import { products } from '@/lib/seed';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { ProductsTable } from './schema';
import { UsersTable } from '@/drizzle/schema';
import * as schema from "@/drizzle/schema"
 
export const db = drizzle(sql, { schema, logger: true });
 
export const getUsers = async () => {
  const users = db.query.UsersTable.findMany()
  return users;
};

export const insertProducts = async () => {

    try {

      const intertingData = db.insert(ProductsTable).values({
        name: products[0].name,
        description: products[0].description,
        price: products[0].price,
        image: products[0].image,
      })

      if (!intertingData) {
        console.log("Error while inserting the products")
      }

      const allProducts = await db.query.ProductsTable.findMany()
      console.log(allProducts.length)

      return allProducts;
      
    } catch (error) {
      console.log("ERROR inserting products", error)
    }
   
}



