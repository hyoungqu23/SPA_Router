import React from 'react';
import Link from '../../components/Router/Link';

const Root = () => {
  return (
    <div>
      <h1>Root</h1>
      <Link href="/about">Move to About</Link>
    </div>
  );
};

export default Root;
