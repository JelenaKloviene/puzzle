import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import GameBoard from './GameBoard';

const onClick = jest.fn();

describe('<GameBoard />', () => {
  describe('if empty tile in first position', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = render(
        <GameBoard
          board={[null, 12, 13, 4, 15, 14, 7, 8, 9, 10, 3, 2, 11, 6, 1, 5]}
          onClickTile={onClick}
        />,
      );
    });

    it('clickable right and bottom button ', () => {
      const { getByText } = wrapper;
      const buttonRight = getByText(/12/i);
      fireEvent.click(buttonRight);
      expect(onClick).toBeCalled();
      const buttonBottom = getByText(/15/i);
      fireEvent.click(buttonBottom);
      expect(onClick).toBeCalled();
    });

    it('second right and second bottom buttons are disabled ', () => {
      const { getByText } = wrapper;
      const buttonSecondRight = getByText(/13/i);
      expect(buttonSecondRight).toBeDisabled();
      const buttonSecondBottom = getByText(/10/i);
      expect(buttonSecondBottom).toBeDisabled();
    });
  });

  describe('if empty tile in second position', () => {
    let wrapper;
    beforeEach(() => {
      jest.clearAllMocks();
      wrapper = render(
        <GameBoard
          board={[12, null, 13, 10, 15, 14, 7, 8, 9, 4, 3, 2, 11, 6, 1, 5]}
          onClickTile={onClick}
        />,
      );
    });

    it('clickable left, right and bottom button ', () => {
      const { getByText } = wrapper;
      const buttonLeft = getByText(/12/i);
      fireEvent.click(buttonLeft);
      expect(onClick).toBeCalled();
      const buttonRight = getByText(/13/i);
      fireEvent.click(buttonRight);
      expect(onClick).toBeCalled();
      const buttonBottom = getByText(/14/i);
      fireEvent.click(buttonBottom);
      expect(onClick).toBeCalled();
    });

    it('second right button is disabled ', () => {
      const { getByText } = wrapper;
      const buttonSecondRight = getByText(/10/i);
      expect(buttonSecondRight).toBeDisabled();
    });
  });
});
