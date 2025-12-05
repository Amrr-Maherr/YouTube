import { useState, useEffect } from 'react';

// Custom hook for localStorage
export const useLocalStorage = (key, defaultValue = []) => {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return defaultValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return defaultValue;
    }
  });

  const setStoredValue = (newValue) => {
    try {
      setValue(newValue);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(newValue));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  const addItem = (item) => {
    if (Array.isArray(value)) {
      if (!value.some(v => JSON.stringify(v) === JSON.stringify(item))) {
        setStoredValue([...value, item]);
      }
    } else {
      setStoredValue(item);
    }
  };

  const removeItem = (itemId) => {
    if (Array.isArray(value)) {
      setStoredValue(value.filter(item => item.id !== itemId));
    }
  };

  const isInStorage = (itemId) => {
    if (Array.isArray(value)) {
      return value.some(item => item.id === itemId);
    }
    return false;
  };

  return [value, setStoredValue, { addItem, removeItem, isInStorage }];
};
