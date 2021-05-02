import useGtagPageViewOnRouteChange from '@hooks/useGtagPageViewOnRouteChange';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  useGtagPageViewOnRouteChange();

  return <Component {...pageProps} />;
};

export default App;
