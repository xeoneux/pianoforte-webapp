import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the appPage state domain
 */

const selectAppPageDomain = state => state.get('appPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AppPage
 */

const makeSelectAppPage = () =>
  createSelector(selectAppPageDomain, substate => substate.toJS());

export default makeSelectAppPage;
export { selectAppPageDomain };
