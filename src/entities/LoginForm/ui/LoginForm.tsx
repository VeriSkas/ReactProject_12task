import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { LoginFormData, LoginFormProps } from '../config/interface';
import { MyLink } from '../../../shared/components/MyLink/ui/MyLink';
import { Button } from '../../../shared/components/Button/ui/Button';
import { MyForm } from '../../../shared/components/MyForm/MyForm';
import { inputRender } from '../../../shared/lib/utils/inputRender';
import { inputsSettings } from '../config/loginInputsSettings';
import classes from './LoginForm.module.scss';

export const LoginForm: FC<LoginFormProps> = ({ title, linkTo, linkText }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    mode: 'all',
  });

  const onSubmit = (data: LoginFormData): void => {};

  return (
    <div className={classes.LoginForm}>
      <h1>{title}</h1>
      <MyForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputRender(register, errors, inputsSettings)}
          <div className={classes.FormBtns}>
            <Button disabled={!isValid}>{t('BtnText.submit')}</Button>
            <MyLink to={linkTo} text={linkText} />
          </div>
        </form>
      </MyForm>
    </div>
  );
};
