import { getEmptyTileRowFromBottom, getInversions, isBoardSolvable } from './helpers';

describe('getInversions', () => {
  it('returns correct amount of inversions', () => {
    const board = [12, 1, 10, 2, 7, 11, 4, 14, 5, null, 9, 15, 8, 13, 6, 3];
    const inversions = getInversions(board);
    expect(inversions).toEqual(49);
  });
  it('returns correct amount of inversions', () => {
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, 11, 15, 13, 12, 14];
    const inversions = getInversions(board);
    expect(inversions).toEqual(4);
  });
});

describe('getEmptyTileRowFromBottom', () => {
  it('returns correct number of row counting from the bottom', () => {
    const board = [12, 1, 10, 2, 7, 11, 4, 14, 5, null, 9, 15, 8, 13, 6, 3];
    const row = getEmptyTileRowFromBottom(board);
    expect(row).toEqual(2);
  });
});

describe('isBoardSolvable', () => {
  it('returns true if '
    + 'the empty tile is on an even row counting from the bottom and '
    + 'the number of inversions is odd', () => {
    const board = [12, 1, 10, 2, 7, 11, 4, 14, 5, null, 9, 15, 8, 13, 6, 3];
    const isSolvable = isBoardSolvable(board);
    expect(isSolvable).toEqual(true);
  });
  it('returns true if '
    + 'the empty tile is on an odd row counting from the bottom and '
    + 'the number of inversions is even', () => {
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, 11, 15, 13, 14, 12];
    const isSolvable = isBoardSolvable(board);
    expect(isSolvable).toEqual(true);
  });
  it('returns false if '
    + 'the empty tile is on an odd row counting from the bottom and '
    + 'the number of inversions is odd', () => {
    const board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 13, 14, 12, null];
    const isSolvable = isBoardSolvable(board);
    expect(isSolvable).toEqual(false);
  });
});
