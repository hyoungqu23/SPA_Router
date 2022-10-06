import React from 'react';

interface useRouterParams {
  url: string;
}

export const useRouter = () => {
  const push = ({ url }: useRouterParams = { url: '/' }) => {
    const { pathname } = window.location;

    if (pathname === url) return;

    window.history.pushState({ data: url }, '', url);

    const popStateEvent = new PopStateEvent('popstate');
    window.dispatchEvent(popStateEvent);
  };

  return { push };
};
