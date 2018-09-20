import { createSelector } from 'reselect';

import { initialState } from './reducer';

/**
 * Direct selector to the keyboard state domain
 */

const selectKeyboardDomain = state => state.get('keyboard', initialState);

/**
 * Other specific selectors
 */

const selectPianoKeys = createSelector(selectKeyboardDomain, keyboard =>
  keyboard.get('keys'),
);

/**
 * Default selector used by Keyboard
 */

const makeSelectKeyboard = () =>
  createSelector(selectKeyboardDomain, substate => substate.toJS());

export default makeSelectKeyboard;
export { selectPianoKeys, selectKeyboardDomain };
