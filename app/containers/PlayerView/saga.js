import { parseArrayBuffer } from 'midi-json-parser';
import { takeEvery, call, put } from 'redux-saga/effects';

import { LOAD_MIDI_INITIAL } from './constants';
import { loadMidiSuccess, loadMidiFailure } from './actions';

export function* loadMidi(action) {
  try {
    const data = yield call(parseArrayBuffer, action.midi);
    yield put(loadMidiSuccess(data));
  } catch (err) {
    yield put(loadMidiFailure(err));
  }
}

// Individual exports for testing
export default function* defaultSaga() {
  yield takeEvery(LOAD_MIDI_INITIAL, loadMidi);
}
