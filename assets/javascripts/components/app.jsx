import React from 'react';
import { Link } from 'react-router';
import ChatContainer from './chat_container';

const App = ({ children }) => (
  <main>
    <ChatContainer userId={1} />
    {children}
  </main>
);

export default App;
