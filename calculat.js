document.getElementById('mobile-plus-btn').addEventListener('click', function(){
    PurchaseMobileAmount('mobile-amount', 1, 1219, "mobile-prize");
    
})

document.getElementById('mobile-minus-btn').addEventListener('click',function(){
    PurchaseMobileAmount('mobile-amount', -1, 1219, "mobile-prize");
})

document.getElementById('casing-plus-btn').addEventListener('click', function(){
    PurchaseMobileAmount('casing-amount', 1, 59, "casing-prize");
})

document.getElementById('casing-minus-btn').addEventListener('click',function(){
    PurchaseMobileAmount('casing-amount', -1, 59, "casing-prize");
})



function PurchaseMobileAmount(plusMinusId, num, productAmount, productPriceID) {

    // use event handler in plus, minus, button of both mobile and casing section
    var capturePieces = document.getElementById(plusMinusId).value;
    var convertPiecesAmount = parseFloat(capturePieces);

    var convertPiecesAmount = convertPiecesAmount + num;

    var totalPrice = productAmount * convertPiecesAmount;
    document.getElementById(plusMinusId).value = convertPiecesAmount;
    document.getElementById(productPriceID).innerText = totalPrice;

    // subtotal amount
    var captureMobilePrice = document.getElementById('mobile-prize').innerText;
    var parseCaptureMobilePrice = parseFloat(captureMobilePrice);
    
    var captureCasingPrice = document.getElementById('casing-prize').innerText;
    var parseCaptureCasingPrice = parseFloat(captureCasingPrice);

    var subtotalAmount = parseCaptureMobilePrice + parseCaptureCasingPrice;
    
    document.getElementById('subtotal-id').innerText = subtotalAmount;

    // tax amount 
    var taxAmount = subtotalAmount * 12/100;
    var onlyNumTax = Math.round(taxAmount);
    document.getElementById('tax-id').innerText = onlyNumTax;

    //final total is showing 
    var finalTotal = onlyNumTax + subtotalAmount;
    document.getElementById('final-total').innerText = finalTotal;
}
