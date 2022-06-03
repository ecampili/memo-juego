import React from 'react';

const Navbar = ({ setTurns, setFinished, setStart }) => {
  const handleClick = () => {
    setTurns(0);
    setFinished(false);
    setStart(true);
  };
  return (
    <div className="container mx-auto flex h-10 justify-between items-center">
      <h1 className="flex-1 text-4xl text-white font-bold drop-shadow-2xl contrast-200	 ">
        Memo<span className="text-red-500">Juego</span>
      </h1>
      <button
        className="text-lg sm:text-xl mx-auto  text-white font-bold bg-violet-600 border-2  p-2 rounded-lg hover:bg-violet-900 transition-all duration-500	"
        onClick={handleClick}
      >
        Nuevo Juego
      </button>
    </div>
  );
};

export default Navbar;
