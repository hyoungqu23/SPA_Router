import React, { PropsWithChildren, useEffect, useState } from 'react';
import RouterContext from './RouterContext';

const BrowserRouter = ({ children }: PropsWithChildren) => {
  const { pathname } = window.location;

  const [path, setPath] = useState(pathname);

  useEffect(() => {
    const pathChange = () => {
      setPath(pathname);
    };

    window.addEventListener('popstate', pathChange);

    return () => {
      window.removeEventListener('popstate', pathChange);
    };
  }, []);

  return (
    <RouterContext.Provider
      value={{
        path,
        changePath: setPath,
      }}
    >
      {children}
    </RouterContext.Provider>
  );
};

export default BrowserRouter;
