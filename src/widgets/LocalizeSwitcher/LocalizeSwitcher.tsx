import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SupportedLanguages } from './i18n/i18n';

import { Button } from '../../shared/components/Button/Button';
import { LocalStorageKey } from '../../shared/constants/localStorage';

export const LocalizeSwitcher: FC<{}> = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem(LocalStorageKey.language) ?? SupportedLanguages.en
  );

  useEffect(() => {
    if (language) {
      void i18n.changeLanguage(language);
    }
  }, [i18n]);

  const toggleLocal = (): void => {
    const newLanguage =
      language === SupportedLanguages.en ? SupportedLanguages.ru : SupportedLanguages.en;

    setLanguage(newLanguage);
    localStorage.setItem(LocalStorageKey.language, newLanguage);
    void i18n.changeLanguage(newLanguage);
  };

  return <Button onClick={toggleLocal}>&#35821;</Button>;
};
