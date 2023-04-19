import React from 'react';

import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Logo } from './Logo';

test('Render logo', () => {
  render(
    <MemoryRouter>
      <Logo />
    </MemoryRouter>
  );

  expect(screen.getByText(/TextContent.logo/i)).toBeInTheDocument();
});
