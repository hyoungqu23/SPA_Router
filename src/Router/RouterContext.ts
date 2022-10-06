import React, { createContext, Dispatch, SetStateAction } from 'react';

type defaultValue = {
  path: string;
  changePath: Dispatch<SetStateAction<string>>;
};

const defaultValue: defaultValue = {
  path: '',
  changePath: () => {},
};

const RouterContext = createContext(defaultValue);

export default RouterContext;
