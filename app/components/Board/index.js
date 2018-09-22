/**
 *
 * Board
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BoardWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #303030;
  border-top: 1px solid #5a5a5a;
`;

const Line = styled.div`
  height: 100%;
  margin-left: -1px;
  position: absolute;
  left: ${({ offset }) => offset}vw;
  border-left: ${({ width }) => width}px solid #5a5a5a;
`;

function Board({ boardLines }) {
  return (
    <BoardWrapper>
      {boardLines.map(line => <Line key={line.key} {...line} />)}
    </BoardWrapper>
  );
}

const boardLinePropType = PropTypes.shape({
  key: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
});

export const boardLinesPropType = PropTypes.arrayOf(boardLinePropType)
  .isRequired;

Board.propTypes = {
  boardLines: boardLinesPropType,
};

export default Board;
