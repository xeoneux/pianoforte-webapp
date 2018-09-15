import { fromJS } from 'immutable';
import keyboardReducer from '../reducer';

describe('keyboardReducer', () => {
  it('returns the initial state', () => {
    expect(keyboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
