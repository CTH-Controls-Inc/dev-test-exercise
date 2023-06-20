import React from 'react';
import Link from 'next/link';
import Login from './login';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Next.js Login App!</h1>
      <Link href="/login">Login</Link>
    </div>
  );
};

export default Home;
