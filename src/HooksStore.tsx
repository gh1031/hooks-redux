import React, { FC } from 'react';
import HooksProvider from './hooks/HooksProvider';
import HooksConsumer from './pages/HooksConsumer';

interface Props {};

const App: FC<Props> = () => {
  return (
    <HooksProvider>
      <HooksConsumer />
    </HooksProvider>
  );
}

export default App;
