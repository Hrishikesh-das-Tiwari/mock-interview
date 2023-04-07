import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
      <Link to="/peers">Peers</Link> <Link to="/sample">Sample</Link>
      <h1>HomePage</h1>
    </>
  );
}

export default HomePage;
