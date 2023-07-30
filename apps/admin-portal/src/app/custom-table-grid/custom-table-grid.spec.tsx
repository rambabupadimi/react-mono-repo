import { render } from '@testing-library/react';

import CustomTableGrid from './custom-table-grid';

describe('CustomTableGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomTableGrid />);
    expect(baseElement).toBeTruthy();
  });
});
