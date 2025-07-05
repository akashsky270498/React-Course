import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    const existingData = stored ? JSON.parse(stored) : null;

    if (existingData) {
      setData(existingData);
    } else {
      localStorage.setItem(key, JSON.stringify(initialData));
    }
  }, [key, initialData]);

  const updateLocalStorage = (newData) => {
    if (typeof newData === "function") {
      localStorage.setItem(key, JSON.stringify(newData(data)));
    } else {
      localStorage.setItem(key, JSON.stringify(newData));
    }
    setData(newData);
  };
  return [data, updateLocalStorage];
}
