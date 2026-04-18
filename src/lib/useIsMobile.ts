import { useEffect, useState } from 'react';

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('matchMedia' in window)) return;

    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile('matches' in e ? e.matches : mq.matches);
    };

    setIsMobile(mq.matches);

    if (mq.addEventListener) {
      mq.addEventListener('change', onChange as EventListener);
    } else {
      // older Safari
      // @ts-ignore
      mq.addListener(onChange);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener('change', onChange as EventListener);
      } else {
        // @ts-ignore
        mq.removeListener(onChange);
      }
    };
  }, [breakpoint]);

  return isMobile;
}
