import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the keyboard state domain
 */

const selectKeyboardDomain = state => state.get('keyboard', initialState);

/**
 * Other specific selectors
 */

const makeSelectKeyWidth = () =>
  createSelector(
    selectKeyboardDomain,
    substate =>
      100 / substate.get('keys').filter(key => key.type === 'white').length,
  );

/**
 * Default selector used by Keyboard
 */

const makeSelectKeyboard = () =>
  createSelector(selectKeyboardDomain, substate => substate.toJS());

export default makeSelectKeyboard;
export { selectKeyboardDomain, makeSelectKeyWidth };
