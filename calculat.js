document.getElementById('plus-btn').addEventListener('click', function(){
    PurchaseMobileAmount('amount-pieces', 1);
   
})

document.getElementById('minus-btn').addEventListener('click',function(){
    PurchaseMobileAmount('amount-pieces', -1);
})
function PurchaseMobileAmount(id, num) {
    var capturePieces = document.getElementById(id).value;
    var convertPiecesAmount = parseFloat(capturePieces);
    var convertPiecesAmount = convertPiecesAmount + num;
    document.getElementById('amount-pieces').value = convertPiecesAmount;
}