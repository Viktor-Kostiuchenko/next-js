// import NextNProgress from 'nextjs-progressbar';
import { useEffect, useState } from 'react';
import Preloader from '../components/Preloader';
import '../styles/main.scss';

const App = ({ Component, pageProps }) => {
  const [isReadyToRender, setIsReadyToRender] = useState(false);

  const x = () => {
    setTimeout(() => {
      setIsReadyToRender(true);
    }, 3000);
  };

  useEffect(() => {
    window.addEventListener('load', x);

    return () => {
      window.removeEventListener('load', x);
    };
  }, []);

  return (
    <>
      {!isReadyToRender && <Preloader />}
      {isReadyToRender && <Component {...pageProps} />}
    </>
  );
};

export default App;
