import { pageView } from '@utils/gtag';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const useGtagPageViewOnRouteChange = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};

export default useGtagPageViewOnRouteChange;
