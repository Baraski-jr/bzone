const CURRENCY_FORMATTER = new Intl.NumberFormat("en-US", {
  currency: "GMD", // Use GMD for the Gambian Dalasi symbol
  style: "currency",
  minimumFractionDigits: 2,
})

export function formatCurrency(amount: number) {
  return CURRENCY_FORMATTER.format(amount)
}

const NUMBER_FORMATTER = new Intl.NumberFormat("en-US")

export function formatNumber(number: number) {
  return NUMBER_FORMATTER.format(number)
}
