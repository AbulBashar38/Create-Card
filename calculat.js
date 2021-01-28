document.getElementById('mobile-plus-btn').addEventListener('click', function(){
    PurchaseMobileAmount('amount-pieces', 1, 1219, "mobile-prize");
})

document.getElementById('mobile-minus-btn').addEventListener('click',function(){
    PurchaseMobileAmount('amount-pieces', -1, 1219, "mobile-prize");
})

function PurchaseMobileAmount(plusMinusId, num, productAmount, productPriceID) {
    var capturePieces = document.getElementById(plusMinusId).value;
    var convertPiecesAmount = parseFloat(capturePieces);
    var convertPiecesAmount = convertPiecesAmount + num;
    var totalPrice = productAmount * convertPiecesAmount;
    document.getElementById(plusMinusId).value = convertPiecesAmount;
    document.getElementById(productPriceID).innerText = totalPrice;
}