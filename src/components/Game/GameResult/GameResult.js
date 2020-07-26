import React from 'react';
import PropTypes from 'prop-types';
import { GameBlurBackground, GameResultWrapper, GameResultAction } from '../Game.styles';
import Button from '../../Button';

const GameResult = ({ isGameSolved, onClickNewGame }) => {
  if (isGameSolved) {
    return (
      <>
        <GameBlurBackground />
        <GameResultWrapper>
          <p>Congratulations!</p>
          <p>You have a new job :)</p>
          <GameResultAction>
            <Button onClick={onClickNewGame}>Start new game</Button>
          </GameResultAction>
        </GameResultWrapper>
      </>
    );
  }
  return null;
};

GameResult.propTypes = {
  isGameSolved: PropTypes.bool.isRequired,
  onClickNewGame: PropTypes.func.isRequired,
};

export default GameResult;
