import React from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

import { Notification } from './Notification';

describe('Notification component', () => {
  it('renders component correctly', () => {
    const { getByText } = render(<Notification show={true} onClose={() => {}} />);

    expect(getByText('Notification')).toBeInTheDocument();
  });

  it('doesn`t render', () => {
    const { queryByText } = render(<Notification show={false} onClose={() => {}} />);

    expect(queryByText('Notification')).not.toBeInTheDocument();
  });

  it('has the default className', () => {
    const { getByTestId } = render(<Notification show={true} onClose={() => {}} />);

    expect(getByTestId('notification-div')).toHaveClass('error');
  });

  it('has the required className', () => {
    const { getByTestId } = render(<Notification show={true} onClose={() => {}} type="warning" />);

    expect(getByTestId('notification-div')).toHaveClass('warning');
  });

  test('click handler is called when the button is clicked', async () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Notification show={true} onClose={handleClick} />);

    expect(handleClick).toHaveBeenCalledTimes(0);
    await userEvent.click(getByText('X'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
