import { useCallback, useEffect, useRef } from 'react';

export const useTimeout = (callback: Function, delay?: number) => {
  const callbackRef = useRef<Function>();
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timer.current = setTimeout(() => {
      if (callbackRef.current !== undefined) {
        callbackRef.current();
      }
      // callbackRef && callbackRef.current();
    }, delay);
  }, [delay]);

  const clear = useCallback(() => {
    timer.current && clearTimeout(timer.current);
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { clear, reset };
};
