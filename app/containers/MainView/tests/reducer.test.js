import { fromJS } from 'immutable';
import mainViewReducer from '../reducer';

describe('mainViewReducer', () => {
  it('returns the initial state', () => {
    expect(mainViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
