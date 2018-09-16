/*
 *
 * PlayerView actions
 *
 */

import { LOAD_MIDI } from './constants';

export function loadMidi(midi) {
  return {
    midi,
    type: LOAD_MIDI,
  };
}
