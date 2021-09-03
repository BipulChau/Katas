let chessBoard = new Array(8);
for (let i = 0; i < chessBoard.length; i++) {
  chessBoard[i] = new Array(8);
}

//console.log(chessBoard); //  checking if array is created or not

let generateBoard = function (whiteQueen, blackQueen) {
  for (i = 0; i < chessBoard.length; i++) {
    if (i === whiteQueen[0]) {
      chessBoard[whiteQueen[0]][whiteQueen[1]] = 1;
    }
    if (i === blackQueen[0]) {
      chessBoard[blackQueen[0]][blackQueen[1]] = 1;
    }
    for (j = 0; j < chessBoard[i].length; j++) {
      if (chessBoard[i][j] === undefined) {
        chessBoard[i][j] = 0;
      }
    }
  }
  return chessBoard;
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
console.log(generateBoard(whiteQueen, blackQueen));
