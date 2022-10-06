import React, { useState, useEffect } from 'react';

interface RouterProps extends React.PropsWithChildren {
  path: string;
  element: React.ReactNode;
}

const Router = ({ path, element }: RouterProps) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const pathChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', pathChange);

    return () => {
      window.removeEventListener('popstate', pathChange);
    };
  }, []);

  return currentPath === path ? <>{element}</> : null;
};

export default Router;
