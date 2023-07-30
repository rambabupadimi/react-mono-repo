import { render } from '@testing-library/react';

import CustomStepper from './custom-stepper';

describe('CustomStepper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomStepper />);
    expect(baseElement).toBeTruthy();
  });
});
