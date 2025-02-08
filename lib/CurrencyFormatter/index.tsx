"use client"

export const priceFormatter = async (number: number) => {
  return new Intl.NumberFormat("GAM", {
    style: "currency",
    currency: "GMD",
  }).format(number)
}
