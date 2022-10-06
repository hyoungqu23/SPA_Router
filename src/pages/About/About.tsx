import React from 'react';
import Link from '../../Router/Link';
import { useRouter } from '../../hooks/useRouter';

const About = () => {
  const { push } = useRouter();

  const handleBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    push({ url: '/' });
  };

  return (
    <>
      <h1>About</h1>
      <Link href="/">Move to Root</Link>
      <button onClick={handleBtnClick}>Move by Hook</button>
    </>
  );
};

export default About;
