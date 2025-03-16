import { WixClient } from "@/context/wixContext"
import { currentCart } from "@wix/ecom"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type CartState = {
  cartOpen: boolean
  setCartOpen: (val: boolean) => void
  cart: currentCart.Cart | undefined
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
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartOpen: false,
      setCartOpen: (val) => set({ cartOpen: val }),
      cart: undefined,
      isLoading: false,
      counter: 0,

      // Update quantity
      updateQuantity: async (wixClient, productId, quantity) => {
        set((state) => ({ ...state, isLoading: true }))
        try {
          const response =
            await wixClient.currentCart.updateCurrentCartLineItemQuantity([
              {
                _id: productId,
                quantity: quantity,
              },
            ])
          set({
            cart: response.cart,
            counter: response.cart?.lineItems.length,
            isLoading: false,
          })
        } catch (error) {
          console.error(error)
          set((state) => ({ ...state, isLoading: false }))
        }
      },

      // Get cart
      getCart: async (wixClient) => {
        set((state) => ({ ...state, isLoading: true }))
        try {
          const cart = await wixClient.currentCart.getCurrentCart()
          set({
            cart: cart || undefined,
            isLoading: false,
            counter: cart?.lineItems.length || 0,
          })
        } catch (err) {
          console.error(err)
          set((prev) => ({ ...prev, isLoading: false }))
        }
      },

      // Add item
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
          set((state) => ({ ...state, isLoading: false }))
        }
      },

      // Remove item
      removeItem: async (wixClient, itemId) => {
        set((state) => ({ ...state, isLoading: true }))
        try {
          const response =
            await wixClient.currentCart.removeLineItemsFromCurrentCart([itemId])
          set({
            cart: response.cart,
            counter: response.cart?.lineItems.length,
            isLoading: false,
          })
        } catch (error) {
          console.error(error)
          set((state) => ({ ...state, isLoading: false }))
        }
      },

      // Empty cart
      emptyCart: async (wixClient) => {
        set((state) => ({ ...state, isLoading: true }))
        try {
          const response = await wixClient.currentCart.deleteCurrentCart()
          set({
            cart: undefined,
            isLoading: false,
            counter: 0,
          })
          localStorage.removeItem("cart-storage") // Clear cart from local storage
        } catch (err) {
          console.error(err)
          set((prev) => ({ ...prev, isLoading: false }))
        }
      },
    }),
    {
      name: "cart-storage", // name of the item in the storage (must be unique)
    }
  )
)
