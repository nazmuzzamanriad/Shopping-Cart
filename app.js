
// phone case  button handler
document.getElementById('case-Plus').addEventListener('click', function () {
    // const caseInput = document.getElementById("case-Input");
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    // plusOne("case-Input");
    UpdateProductNumber("case", 59, true);




})
document.getElementById("case-minus").addEventListener('click', function () {

    // const caseInput = document.getElementById('case-Input');
    // const caseNumber = caseInput.value;
    // if (caseNumber > 0) { caseInput.value = parseInt(caseNumber) - 1 };
    // minusOne("case-Input");
    UpdateProductNumber("case", 59, false);


})

// phone button event handler

document.getElementById('phone-plus').addEventListener('click', function () {

    UpdateProductNumber("phone", 1219, true);





})

document.getElementById('phone-minus').addEventListener('click', function () {

    UpdateProductNumber("phone", 1219, false);
})

function getInputValue(product) {
    const productInput = document.getElementById(product + "-Input");
    const productValue = parseInt(productInput.value);
    return productValue;
}

function calculateTotal() {
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal;
    // update on the html
    document.getElementById("sub-total").innerText = subTotal;
    const tax = subTotal / 10;
    const totalPrice = tax + subTotal;
    // update tax
    document.getElementById("tax-amount").innerText = tax;
    // update total amount
    document.getElementById('total-price').innerText = totalPrice;
}





function UpdateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + "-Input");
    let productNumber = productInput.value;

    if (isIncreasing == true) {
        productInput.value = parseInt(productNumber) + 1;


    }
    else if (productNumber > 0) {
        productInput.value = parseInt(productNumber) - 1;
    }
    productNumber = productInput.value;
    // update value

    const caseTotal = document.getElementById(product + "-total");
    caseTotal.innerText = productNumber * price;

    calculateTotal();





};






















// // dry function positive

// function plusOne(add) {
//     const inputElement = document.getElementById(add);
//     const inputNumber = inputElement.value;
//     inputElement.value = parseInt(inputNumber) + 1;
//     return inputElement.value;
// }
// // dry function negative

// function minusOne(minus) {
//     const inputElement = document.getElementById(minus);
//     const inputNumber = inputElement.value;
//     if (inputNumber > 0) {
//         inputElement.value = parseInt(inputNumber) - 1;
//         return inputElement.value
//     };


// }


