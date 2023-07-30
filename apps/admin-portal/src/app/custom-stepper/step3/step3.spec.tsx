import { render } from '@testing-library/react';

import Step3 from './step3';

describe('Step3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Step3 />);
    expect(baseElement).toBeTruthy();
  });
});
