import { useEffect, useState } from 'react';

export function useDraftForm<T>(key: string, initialState: T) {
  const [state, setState] = useState<T>(initialState);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored) {
        setState(JSON.parse(stored) as T);
      }
    } catch {
      // Ignore draft errors
    }
  }, [key]);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {
      // Ignore draft errors
    }
  }, [key, state]);

  const clear = () => {
    try {
      localStorage.removeItem(key);
    } catch {
      // Ignore draft errors
    }
  };

  return { state, setState, clear };
}
