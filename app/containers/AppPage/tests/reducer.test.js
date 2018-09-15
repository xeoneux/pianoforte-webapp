import { fromJS } from 'immutable';
import appPageReducer from '../reducer';

describe('appPageReducer', () => {
  it('returns the initial state', () => {
    expect(appPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
