let parentDataArrayOfObjects = [];

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

  let newParentDataObject = new ParentDataObject(null, startVertex);
  parentDataArrayOfObjects.push(newParentDataObject);

  if (startVertex[0] === endVertex[0] && startVertex[1] === endVertex[1]) {
    return `=> You made it in 0 moves!  Here's your path:{${endVertex}}`;
  }

  while (queue.length !== 0) {
    let firstVertex = queue.shift();
    let validMoves = getValidMoves(firstVertex);

    validMoves.forEach((move) => {
      queue.push(move);
      newParentDataObject = new ParentDataObject(firstVertex, move);
      parentDataArrayOfObjects.push(newParentDataObject);
    });

    for (const move of validMoves) {
      if (move[0] === endVertex[0] && move[1] === endVertex[1]) {
        let backtrackedPath = backTrackThePath(move);

        let formattedString = ``;
        backtrackedPath.forEach((move) => {
          formattedString = formattedString + ` [${move}]`;
        });

        return `=> You made it in ${
          backtrackedPath.length - 1
        } moves! Your path is :${formattedString}`;
      }
    }
  }
}

//utility functions
function getParentVertex(currentVertex) {
  for (objects of parentDataArrayOfObjects) {
    if (
      objects.data[0] === currentVertex[0] &&
      objects.data[1] === currentVertex[1]
    ) {
      return objects.parent;
    }
  }
}

function backTrackThePath(currentVertex, path = []) {
  if (getParentVertex(currentVertex) === null) {
    path.push(currentVertex);
    path.reverse();
    return;
  } else {
    path.push(currentVertex);
    currentVertex = getParentVertex(currentVertex);
    backTrackThePath(currentVertex, path);
  }

  return path;
}

class ParentDataObject {
  constructor(parent, data) {
    this.parent = parent;
    this.data = data;
  }
}

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
console.log(knightMoves([0, 0], [7, 7]));
