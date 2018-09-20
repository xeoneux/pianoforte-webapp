import { createSelector } from 'reselect';

import { selectPianoKeys } from 'containers/Keyboard/selectors';

import { initialState } from './reducer';

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

/**
 * Default selector used by PlayerView
 */

const makeSelectPlayerView = () =>
  createSelector(selectPlayerViewDomain, substate => substate.toJS());

export default makeSelectPlayerView;
export { makeSelectBoardLines, selectPlayerViewDomain };
