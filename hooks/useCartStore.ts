import { WixClient } from "@/context/wixContext"
import { updateCurrentCartLineItemQuantity } from "@/model/ecom/ecom-api"
import { currentCart } from "@wix/ecom"
import { create } from "zustand"

type CartState = {
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
  // updateQuantity: (
  //   wixClient: WixClient,
  //   productId: string,
  //   quantity: number
  // ) => void
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  isLoading: true,
  counter: 0,

  getCart: async (wixClient) => {
    try {
      const cart = await wixClient.currentCart.getCurrentCart()
      set({
        cart: cart || [],
        isLoading: false,
        counter: cart?.lineItems.length || 0,
      })
      console.log("Success")
    } catch (err) {
      console.log("fail")
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
      console.log(error)
    }
  },
  // // Update
  // updateQuantity: async (wixClient, productId, quantity) => {
  //   set((state) => ({ ...state, isLoading: true }))
  //   const response =
  //     await wixClient.currentCart.updateCurrentCartLineItemQuantity([
  //       {
  //         _id: productId,
  //         quantity: quantity,
  //       },
  //     ])
  //   console.log(response.cart)

  //   set({
  //     cart: response.cart,
  //     counter: response.cart?.lineItems.length,
  //     isLoading: false,
  //   })
  // },

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
}))
