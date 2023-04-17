import React, { FC } from 'react';

import classes from './Avatar.module.scss';

export const Avatar: FC<{ src: string, alt: string }> = ({ src, alt }) => {
  return (
    <div className={classes.Avatar}>
      <img src={src} alt={alt} />
    </div>
  );
};
