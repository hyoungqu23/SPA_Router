import React from 'react';

interface RouterProps extends React.PropsWithChildren {
  path: string;
  element: React.ReactNode;
}

const Router = ({ path, element }: RouterProps) => {
  return window.location.pathname === path ? <>{element}</> : null;
};

export default Router;
