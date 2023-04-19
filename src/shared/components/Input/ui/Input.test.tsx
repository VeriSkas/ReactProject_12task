import React from 'react';
import { render } from '@testing-library/react';

import { Input } from './Input';

describe('Input', () => {
  it('Render with "name" label', () => {
    const { queryByLabelText } = render(<Input label="Name" />);

    expect(queryByLabelText(/name/i)).toBeTruthy();
    expect(queryByLabelText(/fullname/i)).toBeFalsy();
  });
});
