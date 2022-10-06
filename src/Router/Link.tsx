import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: LinkProps) => {
  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.pushState({ data: href }, '', href);

    const popStateEvent = new PopStateEvent('popstate');
    window.dispatchEvent(popStateEvent);
  };

  return (
    <a href={href} onClick={handleLinkClick}>
      {children}
    </a>
  );
};

export default Link;
