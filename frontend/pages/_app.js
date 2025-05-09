// pages/_app.js
import { LanguageProvider } from '../lib/LanguageContext';
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;