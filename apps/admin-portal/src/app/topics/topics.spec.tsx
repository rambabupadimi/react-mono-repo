import { render } from '@testing-library/react';

import Topics from './topics';

describe('Topics', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Topics />);
    expect(baseElement).toBeTruthy();
  });
});
