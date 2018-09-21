import { createSelector } from 'reselect';

import { selectPianoKeys } from 'containers/Keyboard/selectors';

import { initialState } from './reducer';
import { getTrackColor } from 'tools/color';

/**
 * Direct selector to the playerView state domain
 */

const selectPlayerViewDomain = state => state.get('playerView', initialState);

/**
 * Other specific selectors
 */

const makeSelectBoardLines = () =>
  createSelector(selectPianoKeys, pianoKeys => {
    const boardLines = [];
    pianoKeys.forEach(pianoKey => {
      if (pianoKey.name === 'C')
        boardLines.push({
          width: 2,
          key: pianoKey.note,
          offset: pianoKey.offset,
        });
      if (pianoKey.name === 'F')
        boardLines.push({
          width: 1,
          key: pianoKey.note,
          offset: pianoKey.offset,
        });
    });

    return boardLines;
  });

const makeSelectMeasureData = () =>
  createSelector(
    selectPianoKeys,
    selectPlayerViewDomain,
    (pianoKeys, substate) => {
      const data = substate.get('midiData');
      const measures = [];
      if (data) {
        data.notes.forEach(track => {
          track.forEach(note => {
            const newNote = note;

            const foundKey = pianoKeys.find(
              pianoKey => pianoKey.note === note.value,
            );
            newNote.width = foundKey.width;
            newNote.offset = foundKey.offset;

            const { to, from, measure } = note;
            newNote.top = ((measure.to - to) / measure.ticks) * 100;
            newNote.height = ((to - from) / (measure.to - measure.from)) * 100;

            newNote.color = getTrackColor(foundKey.type, note.track);

            if (measures[note.measure.index])
              measures[note.measure.index].push(newNote);
            else measures[note.measure.index] = [newNote];
          });
        });
        return measures;
      }
      return null;
    },
  );

/**
 * Default selector used by PlayerView
 */

const makeSelectPlayerView = () =>
  createSelector(selectPlayerViewDomain, substate => substate.toJS());

export default makeSelectPlayerView;
export { makeSelectBoardLines, makeSelectMeasureData, selectPlayerViewDomain };
