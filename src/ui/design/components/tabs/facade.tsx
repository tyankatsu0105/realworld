import * as React from 'react';

export const TabsContext = React.createContext(0);

export const useTabs = (initialValue = 0) => {
  const [value, setValue] = React.useState(initialValue);

  const handleUpdateValue = React.useCallback(
    (value: number) => {
      setValue(value);
    },
    [setValue]
  );

  return {
    handleUpdateValue,
    value,
  };
};
