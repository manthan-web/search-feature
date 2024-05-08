import { getUsers } from "@/drizzle/db"
import { insertProducts } from "@/drizzle/db"

const Products = async () => {

  const allUsers = await getUsers()

  const insertData = async () => {
    "use server"


    // await insertProducts()

  }

  return (
    
    <>
    <div>Products</div>
    <form action={insertData}>
        <button type="submit" className="bg-indigo-500 px-4 py-2 rounded-sm text-white">Insert Products</button>
    </form>
    <div>
        {allUsers.map((user) => {
            return (
                <div className="flex gap-2 w-1/2 items-center justify-center p-2 text-black bg-zinc-200 mt-3" key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                </div>
            )
        })}
    </div>
    </>

  )
}

export default Products