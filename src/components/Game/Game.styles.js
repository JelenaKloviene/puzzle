import styled from 'styled-components';
import { BOARD_SIZE } from '../../utils/helpers';

export const GameWrapper = styled.div`
 padding: 15px;
 position: relative;
`;

export const GameHeaderWrapper = styled.header`
  text-align: center;
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
`;

export const GameTitle = styled.h2`
  margin: 0;
  color: #003755;
`;

export const GameNote = styled.small`
  font-style: italic;
  color: #7f9baa;
`;

export const GameBoardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: calc(${BOARD_SIZE} * 100px);
  margin: 0 -5px;
`;

export const GameTileButton = styled.button`
  background-color: ${({ isEmpty }) => (isEmpty ? 'rgba(0, 0, 0, 0)' : '#fff')};
  color: ${({ isSolved }) => (isSolved ? '#02c100' : '#092541')};
  transition: transform 0.2s ease 0s, box-shadow 0.3s;
  font-family: 'Poppins', sans-serif;
  width: calc((100% / ${BOARD_SIZE}) - 10px);
  height: 70px;
  border: 1px solid #fff;
  border-radius: 6px;
  outline: none;
  margin: 5px;
  font-size: 20px;
  &:not(:disabled):active {
    transform: scale(0.9);
  }
  &:not(:disabled):hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 15px 0px;
  }
`;

export const GameBlurBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  filter: blur(2px);
  background-color: #d7e9f1;
  opacity: 0.6;
`;

export const GameResultWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px 30px 30px;
  background-color: #fff;
  text-align: center;
  border-radius: 6px;
  min-width: 230px;
`;

export const GameResultAction = styled.div`
  padding-top: 15px;
`;
