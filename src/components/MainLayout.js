import React from 'react';
import Navbar from './Navbar';

const MainLayout = ({ children, setTurns, setFinished, setStart }) => {
  return (
    <div className="bg-gradient-to-b from-violet-500 to-violet-800 min-h-screen">
      <div className="flex flex-col pt-5">
        <Navbar
          setTurns={setTurns}
          setFinished={setFinished}
          setStart={setStart}
        />
        <main className="container mx-auto t">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
