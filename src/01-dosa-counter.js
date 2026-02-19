/**
 * 🍳 Dosa Counter - Order Calculator
 *
 * Raju ka South Indian dosa counter hai Bangalore mein. Customer aata hai,
 * dosa ka type bolta hai, kitne chahiye bolta hai, aur spicy chahiye ya nahi.
 * Tujhe order calculate karke bill banana hai.
 *
 * Rules:
 *   - Dosa prices: plain=40, masala=60, onion=50, butter=70, paper=90, cheese=80
 *   - quantity ka default value 1 hai (agar nahi diya toh 1 maano)
 *   - isSpicy ka default value false hai
 *   - Agar isSpicy true hai, toh har dosa pe Rs 10 extra lagao
 *   - pricePerDosa = base price + (10 if spicy)
 *   - total = pricePerDosa * quantity
 *   - Return: { type, quantity, pricePerDosa, total }
 *   - Hint: Use default parameters, object return
 *
 * Validation:
 *   - Agar type string nahi hai ya unknown type hai, return null
 *   - Agar quantity positive number nahi hai (<=0 ya NaN), return null
 *
 * @param {string} type - Dosa type
 * @param {number} [quantity=1] - Number of dosas
 * @param {boolean} [isSpicy=false] - Add spicy for Rs 10 extra
 * @returns {{ type: string, quantity: number, pricePerDosa: number, total: number } | null}
 *
 * @example
 *   calculateDosaOrder("masala", 2, true)
 *   // => { type: "masala", quantity: 2, pricePerDosa: 70, total: 140 }
 *
 *   calculateDosaOrder("plain")
 *   // => { type: "plain", quantity: 1, pricePerDosa: 40, total: 40 }
 */
export function calculateDosaOrder(type, quantity = 1, isSpicy = false) {

    if (typeof type !== "string" || quantity <= 0 || typeof quantity === NaN || typeof type === "undefined" || Number.isNaN(type)) {
        return null
    }

    let pricePerDosa;
    
    if (type === "plain") {
        pricePerDosa = 40
        if (isSpicy) {
            pricePerDosa += 10
        }
    }
    
    else if (type === "masala") {
        pricePerDosa = 60
        if (isSpicy) {
            pricePerDosa += 10
        }
    }
    
    else if (type === "onion") {
        pricePerDosa = 50
        if (isSpicy) {
            pricePerDosa += 10
        }
    }
    
    else if (type === "butter") {
        pricePerDosa = 70
        if (isSpicy) {
            pricePerDosa += 10
        }
    }
    
    else if (type === "paper") {
        pricePerDosa = 90
        if (isSpicy) {
            pricePerDosa += 10
        }
    }
    
    else if (type === "cheese") {
        pricePerDosa = 80
        if (isSpicy) {
            pricePerDosa += 10
        }
    }
    else {
        return null
    }
    let total = pricePerDosa * quantity

    return { type, quantity, pricePerDosa, total }

}
