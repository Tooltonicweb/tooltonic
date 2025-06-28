// pages/_app.js

import '../styles/globals.css';
// import { ThemeProvider } from 'next-themes'; // For dark/light mode

function MyApp({ Component, pageProps }) {
  return (
    // <ThemeProvider attribute="class" defaultTheme="light"> // Optional
      <Component {...pageProps} />
    // </ThemeProvider>
  );
}

export default MyApp;
