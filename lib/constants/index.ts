export const navLinks = [
  {
    label: "home",
    // url: process.env.NEXT_PUBLIC_BASE_URL as string,
    url: "/",
  },
  {
    label: "Shop",
    url: "/products",
    // url: process.env.NEXT_PUBLIC_BASE_URL + "/products",
  },
  // {
  //   label: "My Orders",
  //   url: "/orders",
  // },
]
export const SHIPINGCOST = 200
export const IMAGE_PLACEHOLDER = "/product.png"
export const CATERORY_IMAGE_PLACEHOLDER = "/category.png"
export const VARIANT_ID = "00000000-0000-0000-0000-000000000000"
export const shoeSlides = [
  {
    id: 0,
    name: "React Infinity",
    // image: "/hero/slider-img2.webp",
    image: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1/slider-img2_ocuo6f`,
    color: "gray",
    price: {
      originalPrice: 1200,
      discountPrice: 999,
    },
  },
  {
    id: 1,
    name: "Airmax Racing",
    // image: "/hero/slider-img3.webp",
    image: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1/slider-img3_lqkpoo`,
    color: "blue-500",
    price: {
      originalPrice: 1000,
      discountPrice: 799,
    },
  },
  {
    id: 2,
    name: "Running Airmax",
    // image: "/hero/slider-img1.webp",
    image: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1/slider-img1_da7vpd`,
    color: "orange-500",

    price: {
      originalPrice: 1100,
      discountPrice: 899,
    },
  },
]
