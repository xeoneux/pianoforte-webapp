import { fromJS } from 'immutable';
import playerViewReducer from '../reducer';

describe('playerViewReducer', () => {
  it('returns the initial state', () => {
    expect(playerViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
