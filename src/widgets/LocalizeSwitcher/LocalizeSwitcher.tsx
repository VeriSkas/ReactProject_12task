import React, { FC } from 'react';

import { Button } from '../../shared/components/Button/Button';
import { useLocal } from './useLocal';

export const LocalizeSwitcher: FC<{}> = () => {
  const toggleLocal = useLocal();

  return <Button onClick={toggleLocal}>&#35821;</Button>;
};
