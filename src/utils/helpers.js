export const BOARD_SIZE = 4;
export const BOARD_TILES = BOARD_SIZE ** 2;
export const EMPTY_TILE = null;
export const SOLVED_BOARD = [...Array(BOARD_TILES)].map((_, i) => {
  if (i === BOARD_TILES - 1) return EMPTY_TILE;
  return (i + 1);
});

export const isEven = (num) => num % 2 === 0;

export const getEmptyTileIndex = (board) => board.indexOf(EMPTY_TILE);

// Formula for determining solvability:

// If the grid width is even,
// and the blank is on an even row counting from the bottom (second-last, fourth-last etc),
// then the number of inversions in a solvable situation is odd.

// If the grid width is even,
// and the blank is on an odd row counting from the bottom (last, third-last, fifth-last etc)
// then the number of inversions in a solvable situation is even.

export const getEmptyTileRowFromBottom = (board) => BOARD_SIZE - Math.floor(getEmptyTileIndex(board) / BOARD_SIZE);

export const getInversions = (board) => {
  const boardWithoutEmptyTile = board.filter((value) => value !== EMPTY_TILE);
  let inversions = 0;
  for (let i = 0; i < boardWithoutEmptyTile.length; i += 1) {
    for (let j = i + 1; j < boardWithoutEmptyTile.length; j += 1) {
      if (boardWithoutEmptyTile[i] > boardWithoutEmptyTile[j]) inversions += 1;
    }
  }
  return inversions;
};

export const isBoardSolvable = (board) => {
  const inversions = getInversions(board);
  const emptyTileRowFromBottom = getEmptyTileRowFromBottom(board);
  const isEvenInversions = isEven(inversions);
  const isEvenEmptyTileRowFromBottom = isEven(emptyTileRowFromBottom);
  return (
    (!isEvenInversions && isEvenEmptyTileRowFromBottom)
    || (isEvenInversions && !isEvenEmptyTileRowFromBottom)
  );
};

export const generateBoard = () => {
  const shuffledBoard = Array.from(SOLVED_BOARD).sort(() => Math.random() - 0.5);
  if (isBoardSolvable(shuffledBoard)) return shuffledBoard;
  return generateBoard();
};

export const isDisabledTile = (board, index) => {
  const emptyTileIndex = getEmptyTileIndex(board);
  if ((index % BOARD_SIZE !== BOARD_SIZE - 1) && (index === emptyTileIndex - 1)) return false;
  if ((index === emptyTileIndex - BOARD_SIZE)) return false;
  if (((index % BOARD_SIZE) !== 0) && (index === emptyTileIndex + 1)) return false;
  return (index !== emptyTileIndex + BOARD_SIZE);
};
