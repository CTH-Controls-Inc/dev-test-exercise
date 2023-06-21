import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Welcome to the Login App!</h1>
      <button style={buttonStyle}>
        <Link href="/login">
          <a style={linkStyle}>Login</a>
        </Link>
      </button>
    </div>
  );
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  background: '#f2f2f2',
};

const titleStyle = {
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '40px',
};

const buttonStyle = {
  padding: '12px 24px',
  borderRadius: '4px',
  background: '#4CAF50',
  border: 'none',
  cursor: 'pointer',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '18px',
};

export default Home;
