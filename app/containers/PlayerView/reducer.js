/*
 *
 * PlayerView reducer
 *
 */

import { Map } from 'immutable';

import {
  LOAD_MIDI_INITIAL,
  LOAD_MIDI_FAILURE,
  LOAD_MIDI_SUCCESS,
} from './constants';

export const initialState = Map({
  midiData: null,
  midiLoading: false,
  midiLoadError: null,
});

function playerViewReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MIDI_INITIAL:
      return state
        .set('midiData', null)
        .set('midiLoading', true)
        .set('midiLoadError', null);

    case LOAD_MIDI_FAILURE:
      return state.set('midiLoading', false).set('midiLoadError', action.error);

    case LOAD_MIDI_SUCCESS:
      return state.set('midiLoading', false).set('midiData', action.data);

    default:
      return state;
  }
}

export default playerViewReducer;
