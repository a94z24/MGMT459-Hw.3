addEventListener("load", main)

//This function is the main body of the sales calculator. It initiates the 
//Sales Calculation process based on an event listener for a click
function main() {
    btCalcSales.addEventListener("click", calculateSales)
}

//This function is the body of the calculator process. It sets
//the price variable and tax rate, then computes the tax based 
//on these inputs. Next it calculates the total price by summing 
//the tax and price. Finally, it rounds the calculated total to 
//2 decimal places and sets the final sets the return value.
function calculateSales() {
    Price=parseFloat(txPrice.value)
    TaxRate=parseFloat(txTaxRate.value)/100
    Tax=Price*TaxRate
    Total=Price+Tax
    spTotal.innerHTML=Total.toFixed(2)
}

