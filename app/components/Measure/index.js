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
  border-radius: 5px;
  width: ${({ keyWidth }) => keyWidth}vw;
  background-color: ${({ color }) => (color === 0 ? 'red' : 'pink')};
  top: ${({ note, theme }) =>
    theme.singleFrameHeight -
    (note.to * theme.singleFrameHeight) / note.measure.to}vh;
  left: ${({ note, theme }) =>
    theme.singleFrameHeight -
    (note.to * theme.singleFrameHeight) / note.measure.to}vh;
  height: ${({ note, theme }) =>
    ((note.to - note.from) * theme.singleFrameHeight) /
    (note.measure.to - note.measure.from)}vh;
`;

function Measure({ tracks, keyWidth }) {
  console.log(tracks);
  return (
    tracks &&
    tracks.map((notes, track) =>
      notes.map(note => <Note note={note} color={track} keyWidth={keyWidth} />),
    )
  );
}

Measure.propTypes = {};

export default Measure;
