import { fetchForm, formAdapter, formReducer } from './form.slice';

describe('form reducer', () => {
  it('should handle initial state', () => {
    const expected = formAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(formReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchForms', () => {
    let state = formReducer(undefined, fetchForm.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = formReducer(state, fetchForm.fulfilled([{ id: 1 }], null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = formReducer(
      state,
      fetchForm.rejected(new Error('Uh oh'), null, null)
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
