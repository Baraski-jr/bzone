const dalasiRate = 75
function convertToSubcurrency(amount: number, factor = 100) {
  return Math.round(amount * factor / dalasiRate)
}
export function convertToStandardcurrency(amount: number, factor = 100) {
  return Math.round(amount / factor)
}

export default convertToSubcurrency
