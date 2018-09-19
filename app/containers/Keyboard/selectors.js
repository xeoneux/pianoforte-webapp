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

const makeSelectInitC = () =>
  createSelector(selectKeyboardDomain, substate => {
    const initC = substate.get('keys').find(key => key.name === 'C');
    return initC ? initC.position : 0;
  });

const makeSelectLines = () =>
  createSelector(selectWhiteKeys, whiteKeys => ({
    pre: whiteKeys.filter(key => key.name === 'C').length,
    post: whiteKeys.filter(key => key.name === 'F').length,
  }));

const makeSelectKeyWidth = () =>
  createSelector(selectWhiteKeys, whiteKeys => 100 / whiteKeys.length);

/**
 * Default selector used by Keyboard
 */

const makeSelectKeyboard = () =>
  createSelector(selectKeyboardDomain, substate => substate.toJS());

export default makeSelectKeyboard;
export {
  makeSelectInitC,
  makeSelectLines,
  makeSelectKeyWidth,
  selectKeyboardDomain,
};
