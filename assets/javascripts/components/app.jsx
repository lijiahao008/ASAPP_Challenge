import React from 'react';
import { Link } from 'react-router';
import Chat from './chat';

const App = ({ children }) => (
  <main>
    <Chat userId={1} />
    {children}
  </main>
);

export default App;
