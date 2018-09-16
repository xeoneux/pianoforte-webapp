/*
 *
 * PlayerView actions
 *
 */

import {
  LOAD_MIDI_INITIAL,
  LOAD_MIDI_FAILURE,
  LOAD_MIDI_SUCCESS,
} from './constants';

export function loadMidi(midi) {
  return {
    midi,
    type: LOAD_MIDI_INITIAL,
  };
}

export function loadMidiFailure(error) {
  return {
    error,
    type: LOAD_MIDI_FAILURE,
  };
}

export function loadMidiSuccess(data) {
  return {
    data,
    type: LOAD_MIDI_SUCCESS,
  };
}
