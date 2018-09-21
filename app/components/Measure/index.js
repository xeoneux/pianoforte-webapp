/**
 *
 * Measure
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const Note = styled.div`
  position: absolute;
  top: ${({ top }) => top}%;
  width: ${({ width }) => width}vw;
  left: ${({ offset }) => offset}vw;
  height: ${({ height }) => height}%;
  background-color: ${({ color }) => color};
  border-top-left-radius: ${({ post }) => (post === 'complete' ? 5 : 0)}px;
  border-top-right-radius: ${({ post }) => (post === 'complete' ? 5 : 0)}px;
  border-bottom-left-radius: ${({ pre }) => (pre === 'complete' ? 5 : 0)}px;
  border-bottom-right-radius: ${({ pre }) => (pre === 'complete' ? 5 : 0)}px;
`;

function Measure({ measure }) {
  return (
    <React.Fragment>
      {measure && measure.map((note, index) => <Note key={index} {...note} />)}
    </React.Fragment>
  );
}

Measure.propTypes = {};

export default Measure;
