
import React, { useState, useEffect } from 'react';
import TransactionJourney from './components/TransactionJourney';

const App: React.FC = () => {
  return (
    <div className="min-h-screen grid-bg">
      <TransactionJourney />
    </div>
  );
};

export default App;
