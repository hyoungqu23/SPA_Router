import React, { useContext } from 'react';
import RouterContext from '../Router/RouterContext';
interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: LinkProps) => {
  const { path, changePath } = useContext(RouterContext);

  const handleLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (path !== href) changePath(href);
  };

  return (
    <a href={href} onClick={handleLinkClick}>
      {children}
    </a>
  );
};

export default Link;
