import {
  fetchUserDetails,
  userDetailsAdapter,
  userDetailsReducer,
} from './user-details.slice';

describe('userDetails reducer', () => {
  it('should handle initial state', () => {
    const expected = userDetailsAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(userDetailsReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchUserDetailss', () => {
    let state = userDetailsReducer(
      undefined,
      fetchUserDetails.pending(null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = userDetailsReducer(
      state,
      fetchUserDetails.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = userDetailsReducer(
      state,
      fetchUserDetails.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
