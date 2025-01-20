import { supabase } from "../supabaseClient"

async function AddProduct(products) {
  //   Inser the product into the products table
  const { data: productData, error: productError } = await supabase
    .from("products")
    .insert([product])
    .select()

  if (productError) {
    console.error("Error adding product: ", productError)
  }

  console.log("inserted product: ", productData)

  //   for type safetypurposes, check if productData is null
  if (!productData) {
    throw new Error("Product data is null")
  }
}

AddProduct(products)

const products = [
  {
    name: "Nike Air Max 2024",
    category: "Shoes > Sneakers",
    description:
      "Experience unmatched comfort with the Nike Air Max 2024 sneakers.",
    brand: "Nike",
    base_price: 150,
  },
]
