import { Link } from 'react-router-dom';

function Sample() {
  return (
    <>
      <h1>Sample</h1>
      <Link to="/">Home</Link> <Link to="/peers">Peers</Link>
    </>
  );
}

export default Sample;

export async function sample() {
  console.log('Reached to sample loader');
  return null;
}
