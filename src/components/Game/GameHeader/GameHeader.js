import React from 'react';
import PropTypes from 'prop-types';
import { GameHeaderWrapper, GameTitle } from '../Game.styles';
import Button from '../../Button';

const GameHeader = ({ onClickNewGame }) => (
  <GameHeaderWrapper>
    <GameTitle>15 puzzle</GameTitle>
    <Button onClick={onClickNewGame}>Start new game</Button>
  </GameHeaderWrapper>
);

GameHeader.propTypes = {
  onClickNewGame: PropTypes.func.isRequired,
};

export default GameHeader;
