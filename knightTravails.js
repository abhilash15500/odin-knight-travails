//knight function

function knightMoves(startVertex, endVertex) {
  if (
    startVertex[0] < 0 ||
    startVertex[0] > 7 ||
    startVertex[1] < 0 ||
    startVertex[1] > 7 ||
    endVertex[0] < 0 ||
    endVertex[0] > 7 ||
    endVertex[1] < 0 ||
    endVertex[1] > 7
  ) {
    return "=> Element not found";
  }

  let queue = [startVertex];

  if (startVertex[0] === endVertex[0] && startVertex[1] === endVertex[1]) {
    return `=> You made it in 0 moves!  Here's your path:{${endVertex}}`;
  }

  while (queue.length !== 0) {
    let firstVertex = queue.shift();
    let validMoves = getValidMoves(firstVertex);

    validMoves.forEach((move) => {
      queue.push(move);
    });

    for (const move of validMoves) {
      if (move[0] === endVertex[0] && move[1] === endVertex[1]) {
        return "element found yay";
      }
    }
  }
}


//utility functions

function getValidMoves(currentPosition) {
  let x = currentPosition[0];
  let y = currentPosition[1];
  const arrayOfValidMoves = [];

  if (x + 2 >= 0 && x + 2 < 8 && y + 1 >= 0 && y + 1 < 8) {
    arrayOfValidMoves.push([x + 2, y + 1]);
  }
  if (x + 2 >= 0 && x + 2 < 8 && y - 1 >= 0 && y - 1 < 8) {
    arrayOfValidMoves.push([x + 2, y - 1]);
  }
  if (x - 2 >= 0 && x - 2 < 8 && y + 1 >= 0 && y + 1 < 8) {
    arrayOfValidMoves.push([x - 2, y + 1]);
  }
  if (x - 2 >= 0 && x - 2 < 8 && y - 1 >= 0 && y - 1 < 8) {
    arrayOfValidMoves.push([x - 2, y - 1]);
  }
  if (x + 1 >= 0 && x + 1 < 8 && y + 2 >= 0 && y + 2 < 8) {
    arrayOfValidMoves.push([x + 1, y + 2]);
  }
  if (x + 1 >= 0 && x + 1 < 8 && y - 2 >= 0 && y - 2 < 8) {
    arrayOfValidMoves.push([x + 1, y - 2]);
  }
  if (x - 1 >= 0 && x - 1 < 8 && y + 2 >= 0 && y + 2 < 8) {
    arrayOfValidMoves.push([x - 1, y + 2]);
  }
  if (x - 1 >= 0 && x - 1 < 8 && y - 2 >= 0 && y - 2 < 8) {
    arrayOfValidMoves.push([x - 1, y - 2]);
  }
  return arrayOfValidMoves;
}

// Example usage:
console.log(knightMoves([0, 0], [3, 3]));
