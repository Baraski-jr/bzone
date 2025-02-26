import { WixClient } from "@/context/wixContext"
import { OrderInfo } from "@/types"
import { currentCart } from "@wix/ecom"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type CartState = {
  cartOpen: boolean
  setCartOpen: (val: boolean) => void
  cart: currentCart.Cart
  isLoading: boolean
  counter: number
  getCart: (wixClient: WixClient) => void
  addItem: (
    wixClient: WixClient,
    productId: string,
    varianId: string,
    quantity: number
  ) => void
  removeItem: (wixClient: WixClient, itemId: string) => void
  emptyCart: (wixClient: WixClient) => void
  updateQuantity: (
    wixClient: WixClient,
    productId: string,
    quantity: number
  ) => void
  storeOrder: (orderInfo: OrderInfo) => void // Add storeOrder function
  orderInfo?: OrderInfo // Add orderInfo property
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartOpen: false,
      setCartOpen: (val) => set({ cartOpen: val }),
      cart: [],
      isLoading: true,
      counter: 0,

      // // Update
      updateQuantity: async (wixClient, productId, quantity) => {
        // set((state) => ({ ...state, isLoading: true }))

        const response =
          await wixClient.currentCart.updateCurrentCartLineItemQuantity([
            {
              _id: productId,
              quantity: quantity,
            },
          ])
        // console.log(response.cart?.lineItems[0].quantity)

        set({
          cart: response.cart,
          counter: response.cart?.lineItems.length,
          isLoading: false,
        })
      },
      getCart: async (wixClient) => {
        try {
          const cart = await wixClient.currentCart.getCurrentCart()
          set({
            cart: cart || [],
            isLoading: false,
            counter: cart?.lineItems.length || 0,
          })
        } catch (err) {
          set((prev) => ({ ...prev, isLoading: false }))
        }
      },

      emptyCart: async (wixClient) => {
        try {
          const response = await wixClient.currentCart.deleteCurrentCart()
          set({
            isLoading: false,
            counter: 0,
          })
        } catch (err) {
          set((prev) => ({ ...prev, isLoading: false }))
        }
      },

      addItem: async (wixClient, productId, varianId, quantity) => {
        set((state) => ({ ...state, isLoading: true }))
        try {
          const response = await wixClient.currentCart.addToCurrentCart({
            lineItems: [
              {
                catalogReference: {
                  appId: process.env.NEXT_PUBLIC_WIX_APP_ID!,
                  catalogItemId: productId,
                  ...(varianId && { options: { varianId } }),
                },
                quantity: quantity,
              },
            ],
          })
          set({
            cart: response.cart,
            counter: response.cart?.lineItems.length,
            isLoading: false,
          })
        } catch (error) {
          console.error(error)
        }
      },
      removeItem: async (wixClient, itemId) => {
        set((state) => ({ ...state, isLoading: true }))
        const response =
          await wixClient.currentCart.removeLineItemsFromCurrentCart([itemId])
        set({
          cart: response.cart,
          counter: response.cart?.lineItems.length,
          isLoading: false,
        })
      },

      // Store order information
      storeOrder: (orderInfo: OrderInfo) => {
        // Store the order information in the state or local storage
        set((state) => ({
          ...state,
          orderInfo,
        }))
      },
    }),
    { name: "cart-storage" }
  )
)
