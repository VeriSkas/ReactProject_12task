import React, { FC } from 'react';

import { Avatar } from '../../shared/components/Avatar/Avatar';
import { LogoutBtn } from '../../features/logout/ui';
import classes from './UserCard.module.scss';

export const UserCard: FC<{}> = () => {
  return (
    <div className={classes.UserCard}>
      <Avatar
        src={'https://images.freeimages.com/fic/images/icons/725/colobrush/256/user_woman.png'}
        alt=""
      />
      <div className={classes.UserData}>
        <h3>User</h3>
        <h5>User@mail.ru</h5>
      </div>
      <div className={classes.Icon}>
        <LogoutBtn />
      </div>
    </div>
  );
};
