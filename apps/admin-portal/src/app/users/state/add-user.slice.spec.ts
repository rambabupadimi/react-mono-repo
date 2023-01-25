import { fetchAddUser, addUserAdapter, addUserReducer } from './add-user.slice';

describe('addUser reducer', () => {
  it('should handle initial state', () => {
    const expected = addUserAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(addUserReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchAddUsers', () => {
    let state = addUserReducer(undefined, fetchAddUser.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = addUserReducer(
      state,
      fetchAddUser.fulfilled([{ id: 1 }], null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = addUserReducer(
      state,
      fetchAddUser.rejected(new Error('Uh oh'), null, null)
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
