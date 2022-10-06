import React, { useCallback, useContext } from 'react';
import RouterContext from '../Router/RouterContext';

interface useRouterParams {
  url: string;
}

export const useRouter = () => {
  const { path, changePath } = useContext(RouterContext);

  const push = useCallback(
    ({ url }: useRouterParams = { url: '/' }) => {
      if (path !== url) changePath(url);
    },
    [path, changePath],
  );

  return { push };
};
