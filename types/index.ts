import { products } from "@wix/stores"
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

interface ProductCartProps {
  product: products.Product
}

export interface CrouselType {
  products: ProductCartProps[]
  categoryId: string
  id?: string
  navigation?: boolean
  pagination?: string
  slidePerView?: number
  breakpoint?: BreakpointsType
  scrollbar?: boolean

  displayLimit?: number
}

export interface CollectionProps {
  categoryId: string
  limit: number
  subTitle: string
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

// Added Type Wix

interface Product {
  name: string
  slug: string
  visible: boolean
  productType: string
  description: string
  sku: string
  weight: number
  weightRange: {
    minValue: number
    maxValue: number
  }
  stock: {
    trackInventory: boolean
    inStock: boolean
    inventoryStatus: string
  }
  price: PriceData
  priceData: PriceData
  convertedPriceData: PriceData
  priceRange: {
    minValue: number
    maxValue: number
  }
  costRange: {
    minValue: number
    maxValue: number
  }
  additionalInfoSections: AdditionalInfoSection[]
  ribbons: string[]
  media: Media
  customTextFields: any[]
  manageVariants: boolean
  productOptions: any[]
  productPageUrl: {
    base: string
    path: string
  }
  numericId: string
  inventoryItemId: string
  discount: {
    type: string
    value: number
  }
  collectionIds: string[]
  variants: Variant[]
  lastUpdated: string
  ribbon: string
  exportProductId: string
  _id: string
  _createdDate: string
}

interface PriceData {
  currency: string
  price: number
  discountedPrice: number
  formatted: {
    price: string
    discountedPrice: string
  }
}

interface AdditionalInfoSection {
  title: string
  description: string
}

interface Media {
  mainMedia: MediaItem
  items: MediaItem[]
}

interface MediaItem {
  thumbnail: Image
  mediaType: string
  title: string
  image: Image
  _id: string
}

interface Image {
  url: string
  width: number
  height: number
}

interface Variant {
  choices: Record<string, string>
  variant: {
    priceData: PriceData
    convertedPriceData: PriceData
    weight: number
    sku: string
    visible: boolean
  }
  stock: {
    trackQuantity: boolean
    inStock: boolean
  }
  _id: string
}

export type Metadata = {
  orderNumber: string
  customerName: string
  customerEmail?: string
}

export type OrderProduct = {
  _key: string
  product: {
    _type: "reference"
    _ref: string
  }
  quantity: number
}

export type OrderInfo = {
  type: string
  orderNumber: string
  customerName: string
  stripeCheckoutSessionId: string
  currency: string
  amountDiscount: number
  orderDate: string | number
  products: OrderProduct[]
  totalPrices: number
  status: "paid" | "pending" | "failed"
}
