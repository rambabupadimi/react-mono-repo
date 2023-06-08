import { render } from '@testing-library/react';

import CustomTabs from './custom-tabs';

describe('CustomTabs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomTabs />);
    expect(baseElement).toBeTruthy();
  });
});
