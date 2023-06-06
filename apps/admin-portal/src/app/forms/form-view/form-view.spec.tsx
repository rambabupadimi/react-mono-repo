import { render } from '@testing-library/react';

import FormView from './form-view';

describe('FormView', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormView />);
    expect(baseElement).toBeTruthy();
  });
});
