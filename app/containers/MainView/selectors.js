import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainView state domain
 */

const selectMainViewDomain = state => state.get('mainView', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainView
 */

const makeSelectMainView = () =>
  createSelector(selectMainViewDomain, substate => substate.toJS());

export default makeSelectMainView;
export { selectMainViewDomain };
