import { useEffect, useState } from 'react';

type DeviceType = 'MOBILE' | 'TABLET' | 'DESKTOP';

type useDeviceTypeReturn = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

export function useDeviceType(): useDeviceTypeReturn {
  const getDeviceType = (): DeviceType => {
    const width = window.innerWidth;

    if (width < 744) return 'MOBILE';
    if (width < 1280) return 'TABLET';
    return 'DESKTOP';
  };

  const [device, setDevice] = useState<DeviceType>('MOBILE');

  const isMobile = device == 'MOBILE';
  const isTablet = device == 'TABLET';
  const isDesktop = device == 'DESKTOP';

  useEffect(() => {
    setDevice(getDeviceType());
    const handleResize = () => setDevice(getDeviceType());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}
