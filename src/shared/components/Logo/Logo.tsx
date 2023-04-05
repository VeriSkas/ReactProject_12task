import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { PATH } from '../../constants/paths';
import { TextContent } from '../../constants/text';
import classes from './Logo.module.scss';

export const Logo: FC<{}> = () => {
  return (
    <Link to={PATH.login}>
      <h3 className={classes.Logo}>{TextContent.logo}</h3>
    </Link>
  );
};
