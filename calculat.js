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
    var capturePieces = document.getElementById(plusMinusId).value;
    var convertPiecesAmount = parseFloat(capturePieces);
    var convertPiecesAmount = convertPiecesAmount + num;
    var totalPrice = productAmount * convertPiecesAmount;
    document.getElementById(plusMinusId).value = convertPiecesAmount;
    document.getElementById(productPriceID).innerText = totalPrice;
}

