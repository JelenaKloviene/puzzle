import React, { useEffect, useState } from 'react';
import GameHeader from './GameHeader';
import GameBoard from './GameBoard';
import GameResult from './GameResult';
import { GameNote, GameWrapper } from './Game.styles';
import {
  SOLVED_BOARD, EMPTY_TILE,
  generateBoard, getEmptyTileIndex,
} from '../../utils/helpers';

const Game = () => {
  const [board, setBoard] = useState([]);
  const [isGameSolved, setIsGameSolved] = useState(false);

  useEffect(() => {
    setBoard(generateBoard());
  }, []);

  useEffect(() => {
    if (board.toString() === SOLVED_BOARD.toString()) setIsGameSolved(true);
    else setIsGameSolved(false);
  }, [board]);

  const onClickTile = (index) => {
    const newBoard = [...board];
    newBoard[getEmptyTileIndex(board)] = board[index];
    newBoard[index] = EMPTY_TILE;
    setBoard(newBoard);
  };

  const onClickNewGame = () => setBoard(generateBoard());

  return (
    <GameWrapper>
      <GameHeader onClickNewGame={onClickNewGame} />
      <GameNote>Click on a number to move it</GameNote>
      <GameBoard board={board} onClickTile={onClickTile} />
      <GameResult isGameSolved={isGameSolved} onClickNewGame={onClickNewGame} />
    </GameWrapper>
  );
};

export default Game;
