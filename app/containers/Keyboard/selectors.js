import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the keyboard state domain
 */

const selectKeyboardDomain = state => state.get('keyboard', initialState);

/**
 * Other specific selectors
 */

const selectWhiteKeys = createSelector(selectKeyboardDomain, substate =>
  substate.get('keys').filter(key => key.type === 'white'),
);

const selectKeyWidth = createSelector(
  selectWhiteKeys,
  whiteKeys => 100 / whiteKeys.length,
);

const selectInitC = createSelector(
  selectWhiteKeys,
  whiteKeys => whiteKeys.find(key => key.name === 'C').position,
);

/**
 * Default selector used by Keyboard
 */

const makeSelectKeyboard = () =>
  createSelector(selectKeyboardDomain, substate => substate.toJS());

export default makeSelectKeyboard;
export { selectInitC, selectKeyWidth, selectWhiteKeys, selectKeyboardDomain };
