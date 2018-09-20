/*
 *
 * Keyboard reducer
 *
 */

import { Map } from 'immutable';

import { playerTheme } from 'tools/theme';

import { DEFAULT_ACTION } from './constants';

export const keyboardTypes = {
  $49: { startKey: 36, endKey: 84 },
  $54: { startKey: 36, endKey: 89 },
  $61: { startKey: 36, endKey: 96 },
  $76: { startKey: 28, endKey: 103 },
  $88: { startKey: 21, endKey: 108 },
};

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export const generateKeys = keyboardType => {
  const pianoKeys = [];
  const blackKeys = [];
  const whiteKeys = [];

  for (let i = keyboardType.startKey; i <= keyboardType.endKey; i += 1) {
    const note = i;
    const name = notes[i % notes.length];
    const type = name.includes('#') ? 'black' : 'white';
    const position = type === 'black' ? blackKeys.length : whiteKeys.length;

    const pianoKey = { note, name, type, position };

    pianoKeys.push(pianoKey);
    if (type === 'black') blackKeys.push(pianoKey);
    else if (type === 'white') whiteKeys.push(pianoKey);
  }

  const whiteKeyWidth = 100 / whiteKeys.length;
  const blackKeyWidth = whiteKeyWidth * playerTheme.crossWidthRatio;

  return pianoKeys.map((pianoKey, index) => {
    const newPianoKey = pianoKey;
    if (pianoKey.type === 'white') {
      newPianoKey.width = whiteKeyWidth;
      newPianoKey.offset = pianoKey.position * whiteKeyWidth;
    } else {
      newPianoKey.width = blackKeyWidth;
      newPianoKey.offset =
        (index - pianoKey.position - 1) * whiteKeyWidth +
        (whiteKeyWidth - blackKeyWidth / 2);
    }

    return newPianoKey;
  });
};

const defaultKeyboard = keyboardTypes.$76;

export const initialState = Map({
  type: defaultKeyboard,
  keys: generateKeys(defaultKeyboard),
});

function keyboardReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default keyboardReducer;
