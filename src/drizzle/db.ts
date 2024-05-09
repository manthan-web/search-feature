import '@/drizzle/envConfig';
import { products } from '@/lib/seed';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { ProductsTable } from './schema';
import * as schema from "@/drizzle/schema"
import { unstable_noStore as noStore } from "next/cache"
import { ilike, like, lte } from 'drizzle-orm';
 
export const db = drizzle(sql, { schema, logger: true });
 
export const getUsers = async () => {
  const users = db.query.UsersTable.findMany()
  return users;
};



export const insertProducts = async () => {

  
    const newProducts = products.map(product => {
      return {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
      }
    })
  
  try {

      await db.insert(ProductsTable).values(newProducts)
      const allProducts = await db.query.ProductsTable.findMany()

      return allProducts;
      
    } catch (error) {
      console.log("ERROR inserting products", error)
    }
   
}


export const findQueryProducts = async (query: string) => {

  noStore();

  if (query) {
    return await db.select().from(ProductsTable).where(query ? ilike(ProductsTable.name, `%${query}%`) : undefined)
  } else if (query == "") {
    console.log("query is empty")
    return await db.query.ProductsTable.findMany()
  } 


}
