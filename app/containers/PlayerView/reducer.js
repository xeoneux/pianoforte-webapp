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
    case LOAD_MIDI: {
      parseArrayBuffer(action.midi);
      return state;
    }
    default:
      return state;
  }
}

export default playerViewReducer;
