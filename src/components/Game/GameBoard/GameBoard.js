import React from 'react';
import PropTypes from 'prop-types';
import { GameBoardWrapper, GameTileButton } from '../Game.styles';
import { EMPTY_TILE, isDisabledTile, SOLVED_BOARD } from '../../../utils/helpers';

const GameBoard = ({ board, onClickTile }) => (
  <GameBoardWrapper>
    {board.map((tile, index) => (
      <GameTileButton
        key={tile}
        onClick={() => onClickTile(index)}
        disabled={isDisabledTile(board, index)}
        isSolved={board[index] === SOLVED_BOARD[index]}
        isEmpty={tile === EMPTY_TILE}
      >
        {tile}
      </GameTileButton>
    ))}
  </GameBoardWrapper>
);

GameBoard.propTypes = {
  board: PropTypes.instanceOf(Array).isRequired,
  onClickTile: PropTypes.func.isRequired,
};

export default GameBoard;
