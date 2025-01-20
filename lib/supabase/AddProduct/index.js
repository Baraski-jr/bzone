import { supabase } from "../supabaseClient"

async function AddProduct(product, variants) {
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

  //  Define product variants
  const variants = [
    {
      variant_id: productData[0].id, // Use the inserted product's ID
      properties: { color: "Red", size: "S" },
      price: 1000,
      stock: 10,
    },
  ]

  // Insert the product variants into the product_variants table
  const { error: variantError } = await supabase
    .from("product_variants")
    .insert(variants)

  if (variantError) {
    console.error("Error adding product variants: ", variantError)
  }

  console.log("inserted variants succesfully")

  //   Define product images
  const images = [
    { product_id: productData[0].id, url: "https://example.com/image1.jpg" },
    { product_id: productData[0].id, url: "https://example.com/image1.jpg" },
  ]
  //   Insert the product images into the product_images table

  const { error: imageError } = await supabase
    .from("product_images")
    .insert(images)

  if (imageError) {
    console.error("Error adding product images: ", imageError)
  }

  console.log("inserted images succesfully")
}

AddProduct()
