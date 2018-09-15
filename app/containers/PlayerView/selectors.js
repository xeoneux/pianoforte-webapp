import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the playerView state domain
 */

const selectPlayerViewDomain = state => state.get('playerView', initialState);

/**
 * Other specific selectors
 */

const makeSelectKeys = () =>
  createSelector(selectPlayerViewDomain, substate => substate.get('keys'));

/**
 * Default selector used by PlayerView
 */

const makeSelectPlayerView = () =>
  createSelector(selectPlayerViewDomain, substate => substate.toJS());

export default makeSelectPlayerView;
export { selectPlayerViewDomain, makeSelectKeys };
