import React, { FC } from 'react';

import { MyLink } from '../../../shared/components/MyLink/ui/MyLink';
import { LoginSignUpFormProps } from '../config/interface';
import { Input } from '../../../shared/components/Input/ui/Input';
import { Button } from '../../../shared/components/Button/ui/Button';
import { MyForm } from '../../../shared/components/MyForm/MyForm';
import classes from './LoginSignUpForm.module.scss';

export const LoginSignUpForm: FC<LoginSignUpFormProps> = ({ title, linkTo, linkText }) => {
  const link = <MyLink to={linkTo} text={linkText} />;
  const button = <Button onClick={submitHandler}>Submit</Button>;
  const inputs = (
    <>
      <Input label="email" />
      <Input label="password" />
    </>
  );

  function submitHandler(): void {}

  return (
    <div className={classes.LoginSignUpForm}>
      <h1>{title}</h1>
      <MyForm handleSubmit={submitHandler} inputs={inputs} link={link} button={button} />
    </div>
  );
};
