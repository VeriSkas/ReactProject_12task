import i18n from '../i18next/i18n';

export default {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#fff',
        },
        {
          name: 'dark',
          value: '#1e1e1e',
        },
      ],
    },
    i18n,
    locale: 'en',
    locales: {
      en: 'English',
      ru: 'Russian',
    },
  },
};
