import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { VFC } from 'react';

const CustomApp: VFC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default CustomApp;
