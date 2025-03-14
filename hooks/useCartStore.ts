import { WixClient } from "@/context/wixContext"
import { currentCart } from "@wix/ecom"
import { create } from "zustand"

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

export const useCartStore = create<CartState>()((set) => ({
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
    const response = await wixClient.currentCart.removeLineItemsFromCurrentCart(
      [itemId]
    )
    set({
      cart: response.cart,
      counter: response.cart?.lineItems.length,
      isLoading: false,
    })
  },
  emptyCart: async (wixClient) => {
    try {
      const response = await wixClient.currentCart.deleteCurrentCart()
      set({
        cart: undefined,
        isLoading: false,
        counter: 0,
      })
      localStorage.removeItem("cart-storage") // Clear cart from local storage
    } catch (err) {
      set((prev) => ({ ...prev, isLoading: false }))
    }
  },
}))
