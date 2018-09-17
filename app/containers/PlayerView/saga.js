import debug from 'debug';
import { Midiate } from 'midiate';
import { takeEvery, put } from 'redux-saga/effects';

import { LOAD_MIDI_INITIAL } from './constants';
import { loadMidiSuccess, loadMidiFailure } from './actions';

const log = debug('player-view:saga');

export function* loadMidi(action) {
  try {
    log('parsing midi data');
    const { notes, measures, division } = new Midiate(action.midi);
    const data = { notes, measures, division };
    log(data);
    yield put(loadMidiSuccess(data));
  } catch (err) {
    yield put(loadMidiFailure(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery(LOAD_MIDI_INITIAL, loadMidi);
}
