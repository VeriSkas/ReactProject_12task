import React, { FC } from 'react';
import classes from './styles.module.scss';
import { UserInfo } from '../../entities/UserInfo/UserInfo';

const UserInfoPage: FC<{}> = () => {
  return (
    <div className={classes.UserInfoPage}>
      <UserInfo />
    </div>
  );
};

export default UserInfoPage;
