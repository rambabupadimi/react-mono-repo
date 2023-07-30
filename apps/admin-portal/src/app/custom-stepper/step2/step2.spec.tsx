import { render } from '@testing-library/react';

import Step2 from './step2';

describe('Step2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Step2 />);
    expect(baseElement).toBeTruthy();
  });
});
