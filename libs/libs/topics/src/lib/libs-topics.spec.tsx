import { render } from '@testing-library/react';

import LibsTopics from './libs-topics';

describe('LibsTopics', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibsTopics />);
    expect(baseElement).toBeTruthy();
  });
});
