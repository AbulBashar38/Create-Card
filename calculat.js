document.getElementById('plus-btn').addEventListener('click', function(){
    var capturePieces = document.getElementById('amount-pieces').value;
    var convertPiecesAmount = parseFloat(capturePieces);
    var convertPiecesAmount = convertPiecesAmount + 1;
    document.getElementById('amount-pieces').value = convertPiecesAmount;
})

document.getElementById('minus-btn').addEventListener('click',function(){
    var capturePieces = document.getElementById('amount-pieces').value;
    var convertPiecesAmount = parseFloat(capturePieces);
    var convertPiecesAmount = convertPiecesAmount - 1;
    document.getElementById('amount-pieces').value = convertPiecesAmount;
})

