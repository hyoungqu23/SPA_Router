import React from 'react';
import Link from '../../Router/Link';

const Root = () => {
  return (
    <>
      <h1>Root</h1>
      <Link href="/about">Move to About</Link>
    </>
  );
};

export default Root;
