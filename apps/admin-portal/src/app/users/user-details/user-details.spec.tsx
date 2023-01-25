import { render } from '@testing-library/react';

import UserDetails from './user-details';

describe('UserDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserDetails />);
    expect(baseElement).toBeTruthy();
  });
});
