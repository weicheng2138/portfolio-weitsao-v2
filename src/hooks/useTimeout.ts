import { useEffect, useRef } from 'react';

export const useTimeout = (fn: Function, delay?: number) => {
  const timer = useRef<number>();
  useEffect(() => {
    timer.current = setTimeout(fn, delay);

    return () => {
      clearTimeout(timer.current);
    };
  });

  const clear = () => {
    clearTimeout(timer.current);
    console.log('clear');
  };

  const reset = () => {
    clear();
    timer.current = setTimeout(fn, delay);
  };

  return { clear, reset };
};
