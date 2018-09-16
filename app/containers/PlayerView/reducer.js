/*
 *
 * PlayerView reducer
 *
 */

import { Map } from 'immutable';
import { parseArrayBuffer } from 'midi-json-parser';

import { LOAD_MIDI } from './constants';

export const initialState = Map({});

function playerViewReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MIDI:
      return state.set('midiData', parseArrayBuffer(action.midi));

    default:
      return state;
  }
}

export default playerViewReducer;
