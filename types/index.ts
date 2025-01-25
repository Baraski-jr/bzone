export interface coloursType {
  name: string
  items: number
}
export interface PageProps {
  params: Promise<{ productId: string }>
}
export interface HeaderComponentProps {
  colour: string
  logoUrl: string
}
export interface SubHeroPropType {
  title: string
  links?: {
    name: string
    url: string
  }[]
}

export interface sizesType {
  name: string
  items: number
}

export interface ThumbnailsType {
  id: number
  title: string
  direction?: string
  images: string[]
  setSelectedImage: React.Dispatch<React.SetStateAction<number>>
}
6

export interface ProductsType {
  id: number
  title: string
  description?: string
  images: string[]
  sizes?: sizesType[]
  colours: coloursType[]
  price: number
  inventory: number
  category?: string
  isNew?: boolean
  isFeatured?: boolean
  isBestSeller?: boolean
}
export interface BreakpointsType {
  640?: { slidesPerView: number }
  768?: { slidesPerView: number }
  1024?: { slidesPerView: number }
  1280?: { slidesPerView: number }
  1536?: { slidesPerView: number }
  1920?: { slidesPerView: number }
}

export interface CrouselType {
  id?: string
  navigation?: boolean
  pagination?: string
  slidePerView?: number
  breakpoint?: BreakpointsType
  scrollbar?: boolean

  products: ProductsType[]
  displayLimit?: number
}

export interface CollectionProps {
  title: string
  subTitle: string
  bgUrl: string
  id: string
  category: string
}

export interface NavLinkProps {
  label: string
  url: string
}

export interface DesktopHeaderProps {
  colour: string
  logoUrl: string
}

export interface shoeSlide {
  id: number
  name: string
  image: string
  color: string
  price: {
    discountPrice: number
    originalPrice: number
  }
}

export interface CartItem extends ProductsType {
  quantity: number
  totalPrice?: number
}

export interface CartContextType {
  cart: CartItem[]
  addToCart: (product: ProductsType) => void
  removeFromCart: (productId: number, reset?: boolean) => void
}

// Testing product Type
// export interface ProductType {
//   ProductId: string
//   name: string
//   category: string
//   description: string
//   brand?: string // temporal
//   images: string[]

//   basePrice: number

//   variants: {
//     variantId: string
//     properties: {
//       color: string
//       size: string
//     }
//     price?: number
//     images: string[]
//     stock: number
//   }[]

//   reviews?: {
//     reviewId: number
//     userId: number
//     rating: number
//     comment: string
//     timestamp: string
//   }[]

//   ratings?: {
//     averageRating: number
//     totalReviews: number
//   }[]
// }
