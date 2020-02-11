import {useState, useEffect} from 'react';
import throttle from 'lodash.throttle';

// this breakpoint manager comes from: 
// https://medium.com/better-programming/usebreakpoint-hook-get-media-query-breakpoints-in-react-3f1779b73568

  const getDeviceConfig = (width) => {
    if(width < 320) {
      return 'iphone5';
    } else if(width >= 320 && width < 720 ) {
      return 'mobile';
    } else if(width >= 720 && width < 1024) {
      return 'ipad';
    } else if(width >= 1024) {
      return 'desktop';
    }
  };

  const useBreakpoint = () => {
    const [brkPnt, setBrkPnt] = useState(() => {
      if(typeof window !== 'undefined') {
        getDeviceConfig(window.innerWidth)
      }
    });
  
  useEffect(() => {
    const calcInnerWidth = throttle(function() {
      setBrkPnt(getDeviceConfig(window.innerWidth))
    }, 200); 
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return brkPnt;
}
export default useBreakpoint;