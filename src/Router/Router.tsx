import React, { useState, useEffect, useContext } from 'react';
import RouterContext from './RouterContext';

interface RouterProps extends React.PropsWithChildren {
  to: string;
  element: React.ReactNode;
}

const Router = ({ to, element }: RouterProps) => {
  const { path } = useContext(RouterContext);

  return path === to ? <>{element}</> : null;
};

export default Router;
