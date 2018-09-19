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
  position: absolute;
  background-color: #303030;
`;

const Line = styled.div`
  margin-left: -1px;
  position: absolute;
  height: ${({ theme }) => theme.singleFrameHeight}vh;
  border-left: ${({ thick }) => (thick ? 2 : 1)}px solid #5a5a5a;
  left: ${({ thick, count, initC, keyWidth }) =>
    thick
      ? initC * keyWidth + count * 7 * keyWidth
      : initC * keyWidth + (count * 7 * keyWidth + 3 * keyWidth)}vw;
`;

function Board({ initC, lines, keyWidth }) {
  return (
    <BoardWrapper>
      {[...Array(lines.pre).keys()].map((v, i) => (
        <Line thick key={v} count={i} initC={initC} keyWidth={keyWidth} />
      ))}
      {[...Array(lines.post).keys()].map((v, i) => (
        <Line key={v} count={i} initC={initC} keyWidth={keyWidth} />
      ))}
    </BoardWrapper>
  );
}

Board.propTypes = {
  lines: PropTypes.object,
  initC: PropTypes.number,
  keyWidth: PropTypes.number,
};

export default Board;
