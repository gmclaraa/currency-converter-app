export function convertCurrency (amount){
    return (parseFloat(amount) * rate).toFixed(2)
}
