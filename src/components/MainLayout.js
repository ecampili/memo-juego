import React from 'react';
import Navbar from './Navbar';

const MainLayout = ({ children, setTurns, setFinished, setStart }) => {
  return (
    <div className="bg-gradient-to-b from-violet-500 to-violet-800 min-h-screen min-w-['375px']">
      <div className="flex flex-col ">
        <Navbar
          setTurns={setTurns}
          setFinished={setFinished}
          setStart={setStart}
        />
        <main className="container mx-auto min-h-[calc(100vh-52px)] flex flex-col justify-center mt-5">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
