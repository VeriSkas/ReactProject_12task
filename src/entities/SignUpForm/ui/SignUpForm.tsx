import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { SignUpFormData, SignUpFormProps } from '../config/interface';
import { signUpInputsSettings } from '../config/signUpInputsSettings';
import { inputRender } from '../../../shared/lib/utils/inputRender';
import { MyForm } from '../../../shared/components/MyForm/MyForm';
import { Button } from '../../../shared/components/Button/ui/Button';
import { MyLink } from '../../../shared/components/MyLink/ui/MyLink';
import classes from './SignUpForm.module.scss';

export const SignUpForm: FC<SignUpFormProps> = ({ title, linkTo, linkText }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormData>({
    mode: 'all',
  });
  const inputsSettings = { ...signUpInputsSettings };
  inputsSettings.password2.register.rules.validate = (val: string) => {
    if (watch('password') !== val) {
      return 'Your passwords do no match';
    }
  };

  const onSubmit = (data: SignUpFormData): void => {};

  return (
    <div className={classes.SignUpForm}>
      <h1>{title}</h1>
      <MyForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          {inputRender(register, errors, inputsSettings)}
          <div className={classes.FormBtns}>
            <Button>{t('BtnText.submit')}</Button>
            <MyLink to={linkTo} text={linkText} />
          </div>
        </form>
      </MyForm>
    </div>
  );
};
