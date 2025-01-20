export const products = [
  {
    productId: "12345",
    name: "Nike Air Max 2024",
    category: "Shoes > Sneakers",
    description:
      "Experience unmatched comfort with the Nike Air Max 2024 sneakers, designed for everyday wear.",
    brand: "Nike",
    images: [
      "/products/nike-air-max-2024-red.jpg",
      "/products/nike-air-max-2024-blue.jpg",
      "/products/nike-air-max-2024-black.jpg",
    ],
    basePrice: 150,
    variants: [
      {
        variantId: "12345-red-s",
        properties: {
          color: "Red",
          size: "S",
        },
        price: 155,
        images: [
          "/products/nike-air-max-2024-red.jpg",
          "/products/nike-air-max-2024-red-side.jpg",
        ],
        stock: 10,
      },
      {
        variantId: "12345-blue-l",
        properties: {
          color: "Blue",
          size: "L",
        },
        price: 178,
        images: [
          "/products/nike-air-max-2024-blue.jpg",
          "/products/nike-air-max-2024-blue-side.jpg",
        ],
        stock: 8,
      },
    ],
    reviews: [
      {
        reviewId: "r1",
        userId: "u123",
        rating: 5,
        comment: "Super comfortable and stylish!",
      },
    ],
    ratings: {
      averageRating: 5,
      totalReviews: 1,
    },
  },
  {
    productId: "12346",
    name: "Adidas UltraBoost 2024",
    category: "Shoes > Sneakers",
    description:
      "Feel the energy with Adidas UltraBoost 2024 sneakers, designed for maximum comfort and support.",
    brand: "Adidas",
    images: [
      "/products/adidas-ultraboost-2024-white.jpg",
      "/products/adidas-ultraboost-2024-black.jpg",
      "/products/adidas-ultraboost-2024-gray.jpg",
    ],
    basePrice: 160,
    variants: [
      {
        variantId: "12346-white-m",
        properties: {
          color: "White",
          size: "M",
        },
        price: 165,
        images: [
          "/products/adidas-ultraboost-2024-white.jpg",
          "/products/adidas-ultraboost-2024-white-side.jpg",
        ],
        stock: 15,
      },
      {
        variantId: "12346-black-xl",
        properties: {
          color: "Black",
          size: "XL",
        },
        price: 178,
        images: [
          "/products/adidas-ultraboost-2024-black.jpg",
          "/products/adidas-ultraboost-2024-black-side.jpg",
        ],
        stock: 12,
      },
    ],
    reviews: [
      {
        reviewId: "r2",
        userId: "u124",
        rating: 4,
        comment: "Very comfortable, but a bit tight on the sides.",
      },
    ],
    ratings: {
      averageRating: 4.5,
      totalReviews: 1,
    },
  },
  {
    productId: "12347",
    name: "Puma RS-X 2024",
    category: "Shoes > Sneakers",
    description:
      "The Puma RS-X 2024 offers premium comfort and a sleek design.",
    brand: "Puma",
    images: [
      "/products/puma-rsx-2024-red.jpg",
      "/products/puma-rsx-2024-white.jpg",
      "/products/puma-rsx-2024-black.jpg",
    ],
    basePrice: 140,
    variants: [
      {
        variantId: "12347-red-m",
        properties: {
          color: "Red",
          size: "M",
        },
        price: 145,
        images: [
          "/products/puma-rsx-2024-red.jpg",
          "/products/puma-rsx-2024-red-side.jpg",
        ],
        stock: 20,
      },
      {
        variantId: "12347-black-l",
        properties: {
          color: "Black",
          size: "L",
        },
        price: 160,
        images: [
          "/products/puma-rsx-2024-black.jpg",
          "/products/puma-rsx-2024-black-side.jpg",
        ],
        stock: 18,
      },
    ],
    reviews: [
      {
        reviewId: "r3",
        userId: "u125",
        rating: 4,
        comment: "Great style, but the sole could be more cushioned.",
      },
    ],
    ratings: {
      averageRating: 4.5,
      totalReviews: 1,
    },
  },
  {
    productId: "12348",
    name: "Reebok Classic 2024",
    category: "Shoes > Sneakers",
    description:
      "A timeless classic, the Reebok Classic 2024 is perfect for all occasions.",
    brand: "Reebok",
    images: [
      "/products/reebok-classic-2024-white.jpg",
      "/products/reebok-classic-2024-black.jpg",
      "/products/reebok-classic-2024-gray.jpg",
    ],
    basePrice: 130,
    variants: [
      {
        variantId: "12348-white-s",
        properties: {
          color: "White",
          size: "S",
        },
        price: 135,
        images: [
          "/products/reebok-classic-2024-white.jpg",
          "/products/reebok-classic-2024-white-side.jpg",
        ],
        stock: 25,
      },
      {
        variantId: "12348-black-m",
        properties: {
          color: "Black",
          size: "M",
        },
        price: 150,
        images: [
          "/products/reebok-classic-2024-black.jpg",
          "/products/reebok-classic-2024-black-side.jpg",
        ],
        stock: 30,
      },
    ],
    reviews: [
      {
        reviewId: "r4",
        userId: "u126",
        rating: 5,
        comment: "Love the classic style. Super comfortable.",
      },
    ],
    ratings: {
      averageRating: 5,
      totalReviews: 1,
    },
  },
  {
    productId: "12349",
    name: "New Balance 990v5",
    category: "Shoes > Sneakers",
    description:
      "The New Balance 990v5 combines performance and style with premium materials.",
    brand: "New Balance",
    images: [
      "/products/new-balance-990v5-gray.jpg",
      "/products/new-balance-990v5-black.jpg",
      "/products/new-balance-990v5-white.jpg",
    ],
    basePrice: 180,
    variants: [
      {
        variantId: "12349-gray-l",
        properties: {
          color: "Gray",
          size: "L",
        },
        price: 185,
        images: [
          "/products/new-balance-990v5-gray.jpg",
          "/products/new-balance-990v5-gray-side.jpg",
        ],
        stock: 22,
      },
      {
        variantId: "12349-black-xl",
        properties: {
          color: "Black",
          size: "XL",
        },
        price: 200,
        images: [
          "/products/new-balance-990v5-black.jpg",
          "/products/new-balance-990v5-black-side.jpg",
        ],
        stock: 18,
      },
    ],
    reviews: [
      {
        reviewId: "r5",
        userId: "u127",
        rating: 5,
        comment: "Exceptional quality and comfort. Worth the price.",
      },
    ],
    ratings: {
      averageRating: 5,
      totalReviews: 1,
    },
  },
]
