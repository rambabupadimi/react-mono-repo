import { render } from '@testing-library/react';

import DeleteUser from './delete-user';

describe('DeleteUser', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DeleteUser />);
    expect(baseElement).toBeTruthy();
  });
});
