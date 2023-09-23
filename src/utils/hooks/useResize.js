import { useState, useEffect } from 'react';
import {
  SCREEN_480,
  SCREEN_768,
  SCREEN_1280,
} from '../constants/constants';

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [currentScreen, setCurrentScreen] = useState(SCREEN_480);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (width > SCREEN_768) {
      setCurrentScreen(SCREEN_1280);
    } else if (width > SCREEN_480) {
      setCurrentScreen(SCREEN_768);
    } else {
      setCurrentScreen(SCREEN_480);
    }
  }, [width]);

  return [
    currentScreen,
  ];
};