module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'mr'],
    localeDetection: false,
  },
  react: { useSuspense: false },
  localePath: typeof window === 'undefined' ? require('path').resolve('./public/locales') : '/locales',
};