import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GameResult from './GameResult';

const onClick = jest.fn();

describe('<GameResult />', () => {
  it('renders success msg if game solved', () => {
    const { getByText } = render(
      <GameResult isGameSolved onClickNewGame={onClick} />,
    );
    const successText = getByText(/Congratulations!/i);
    expect(successText).toBeInTheDocument();
  });
  it('renders /Start new game/ clickable button if game solved', () => {
    const { getByText } = render(
      <GameResult isGameSolved onClickNewGame={onClick} />,
    );
    const button = getByText(/Start new game/i);
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(onClick).toBeCalled();
  });
});
