import {
  fetchDeleteUser,
  deleteUserAdapter,
  deleteUserReducer,
} from './delete-user.slice';

describe('deleteUser reducer', () => {
  it('should handle initial state', () => {
    const expected = deleteUserAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(deleteUserReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchDeleteUsers', () => {
    let state = deleteUserReducer(
      undefined,
      fetchDeleteUser.pending(null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = deleteUserReducer(
      state,
      fetchDeleteUser.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = deleteUserReducer(
      state,
      fetchDeleteUser.rejected(new Error('Uh oh'), null, null)
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
