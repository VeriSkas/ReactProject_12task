import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import '../../shared/config/matchMedia.mock';
import { ThemeSwitcher } from './ui';
import { convertHexToRGBA } from '../../shared/helpers/convertHexToRGBA';

describe('ChangeTheme button', () => {
  it('should change theme by click', () => {
    const { getByTestId, queryByTestId } = render(<ThemeSwitcher />);

    expect(queryByTestId('changeThemeBtn')).not.toBeNull();

    expect(queryByTestId('changeThemeBtn')).toHaveStyle({
      background: convertHexToRGBA('#8d0030'),
    });

    fireEvent.click(getByTestId('changeThemeBtn'));

    expect(screen.queryByTestId('changeThemeBtn')).toHaveStyle({
      background: convertHexToRGBA('#3e0115'),
    });
  });
});
