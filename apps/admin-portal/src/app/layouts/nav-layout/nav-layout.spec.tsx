import { render } from '@testing-library/react';

import NavLayout from './nav-layout';

describe('NavLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavLayout />);
    expect(baseElement).toBeTruthy();
  });
});
