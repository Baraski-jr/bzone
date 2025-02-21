import { useWixClient } from "@/hooks/useWixCient"
import { cart, currentCart } from "@wix/ecom"

export type LineItem = cart.LineItem
export type Cart = cart.Cart
export type LineItemQuantityUpdate = cart.LineItemQuantityUpdate

const wixClient = useWixClient()

// Adds catalog line items to the current site visitor's cart.
async function addToCurrentCart({ lineItems }: { lineItems: LineItem[] }) {
  const response = await wixClient.currentCart.addToCurrentCart({ lineItems })
}

// Deletes the current site visitor's cart.
async function deleteCurrentCart() {
  const response = await wixClient.currentCart.deleteCurrentCart()
}

// Retrieves the current site visitor's cart.
async function getCurrentCart() {
  const response = await wixClient.currentCart.getCurrentCart()
}

export async function updateCurrentCartLineItemQuantity({
  LineItemQuantityUpdate,
}: {
  LineItemQuantityUpdate: LineItemQuantityUpdate[]
}) {
  const response =
    await wixClient.currentCart.updateCurrentCartLineItemQuantity(
      LineItemQuantityUpdate
    )
}

// async function estimateCurrentCartTotals() {
//   const response = await wixClient.currentCart.estimateCurrentCartTotals();
//   return response
// }

// Updates the quantity of one or more line items in the current site visitor's cart.
// async function updateCurrentCartLineItemQuantity(
//   LineItemQuantityUpdate: LineItemQuantityUpdate[]
// ) {
//   const response =
//     await wixClient.currentCart.updateCurrentCartLineItemQuantity(
//       LineItemQuantityUpdate
//     )
// }

// Creates a checkout from the current site visitor’s cart.
async function createCheckoutFromCurrentCart() {
  const response = await wixClient.currentCart.createCheckoutFromCurrentCart({
    channelType: currentCart.ChannelType.WEB,
  })
}

// Estimates the current cart's price totals (including tax), based on a selected carrier service, shipping address, and billing information.
// async function estimateCurrentCartTotals(options) {
//   const response = await wixClient.currentCart.estimateCurrentCartTotals(
//     options
//   )
// }

// Removes the coupon from the current site visitor's cart.
// async function removeCouponFromCurrentCart() {
//   const response = await wixClient.currentCart.removeCouponFromCurrentCart()
// }

// Removes line items from the current site visitor's cart.
async function removeLineItemsFromCurrentCart(itemIds: string[]) {
  const response = await wixClient.currentCart.removeLineItemsFromCurrentCart(
    itemIds
  )
}

// Updates the current site visitor's cart.
async function updateCurrentCart({ cartInfo }: { cartInfo: Cart }) {
  const response = await wixClient.currentCart.updateCurrentCart({ cartInfo })
}
