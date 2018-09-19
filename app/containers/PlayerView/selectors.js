import { createSelector } from 'reselect';
import {
  selectWhiteKeys,
  selectInitC,
  selectKeyWidth,
} from 'containers/Keyboard/selectors';

import { initialState } from './reducer';

/**
 * Direct selector to the playerView state domain
 */

const selectPlayerViewDomain = state => state.get('playerView', initialState);

/**
 * Other specific selectors
 */

const makeSelectBoardLines = () =>
  createSelector(
    selectInitC,
    selectKeyWidth,
    selectWhiteKeys,
    (initC, keyWidth, whiteKeys) => {
      let C = -1;
      let F = -2;
      let key = 0;
      const lines = [];
      const largeSpace = 7 * keyWidth;
      const smallSpace = 3 * keyWidth;
      const initSpace = initC * keyWidth;
      whiteKeys.forEach(whiteKey => {
        if (whiteKey.name === 'C')
          lines.push({
            width: 2,
            key: (key += 1),
            left: initSpace + (C += 1) * largeSpace,
          });
        if (whiteKey.name === 'F')
          lines.push({
            width: 1,
            key: (key += 1),
            left: initSpace + ((F += 1) * largeSpace + smallSpace),
          });
      });
      return lines;
    },
  );

/**
 * Default selector used by PlayerView
 */

const makeSelectPlayerView = () =>
  createSelector(selectPlayerViewDomain, substate => substate.toJS());

export default makeSelectPlayerView;
export { makeSelectBoardLines, selectPlayerViewDomain };
