import { render } from '@testing-library/react';

import Step1 from './step1';

describe('Step1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Step1 />);
    expect(baseElement).toBeTruthy();
  });
});
