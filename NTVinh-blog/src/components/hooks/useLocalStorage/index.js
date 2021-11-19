import React from "react";

function getStorage(key, Value) {
  const saveValue = localStorage.getItem(key);
  const initial = JSON.parse(saveValue);
  return initial || Value;
}

export const useLocalStorage = (key, Value) => {
  const [value, setValue] = React.useState(() => {
    return getStorage(key, Value);
  });

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
