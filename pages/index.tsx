import React from 'react';
import Login from './Login';

interface Props { }

const Home: React.FunctionComponent<Props> = () => (
  <div>

    <h1>Home</h1>
    <Login />
  </div>
);

export default Home;
