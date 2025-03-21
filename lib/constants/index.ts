export const navLinks = [
  {
    label: "home",
    url: process.env.NEXT_PUBLIC_BASE_URL as string,
    // url: "/",
  },
  {
    label: "Products",
    // url: "/products",
    url: process.env.NEXT_PUBLIC_BASE_URL + "/products",
  },
]
export const SHIPINGCOST = 200
export const IMAGE_PLACEHOLDER = "/product.png"
export const CATERORY_IMAGE_PLACEHOLDER = "/category.png"
export const VARIANT_ID = "00000000-0000-0000-0000-000000000000"
export const shoeSlides = [
  {
    id: 0,
    name: "React Infinity",
    image: "/hero/slider-img2.webp",
    color: "gray",
    price: {
      originalPrice: 1200,
      discountPrice: 999,
    },
  },
  {
    id: 1,
    name: "Airmax Racing",
    image: "/hero/slider-img3.webp",
    color: "blue-500",
    price: {
      originalPrice: 1000,
      discountPrice: 799,
    },
  },
  {
    id: 2,
    name: "Running Airmax",
    image: "/hero/slider-img1.webp",
    color: "orange-500",

    price: {
      originalPrice: 1100,
      discountPrice: 899,
    },
  },
]
