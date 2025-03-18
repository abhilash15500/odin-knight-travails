// a function knightMoves that can generate the shortest path of a knight from one spot to other

function knightMoves(startPosition, endPosition) {
  // here i have declared a valid path variable that will store all the valid path to reach destination and i will return it later to find shortest array of valid path to decide which is shortest path after traversal
  let validPaths = [];

  //declared a queue to track the vertices 
  let queue = [];

  // a discovered vertex variable array to check what visited
  let discoveredVertex = [];

  //current path array to return the current path if target is found inside the valid paths 
  let currentPath = [];

  queue.push(startPosition);  // start with first vertex starting posi
  discoveredVertex.push(startPosition);  // put the discovered vertex in the variable 
  currentPath = [startPosition]; // add start position to current path and later add more using iteration

  // iteration to do bfs on the graph so that all the paths can be checked
  while (queue.length !== 0) {  // queue is empty means we visited all vertices so its over
        
    let validMovesArray = generateValidMoves(startPosition);

  }
}

function generateValidMoves(currentPosition) {
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
