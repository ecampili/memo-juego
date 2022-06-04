import React from 'react';
import Layout1 from './Layout1';

const Result = ({
  turns,
  setTurns,
  setFinished,
  setQuantity,
  quantity,
  setStart,
}) => {
  const handleClick = () => {
    setTurns(0);
    setFinished(false);
    setStart(true);
  };

  return (
    <Layout1>
      <h1 className="text-4xl md:text5xl text-white font-bold drop-shadow-2xl contrast-200	mb-10">
        Genial lo has logrado
      </h1>

      <h3 className="text-lg sm:text-2xl text-white  mb-10">
        Encontraste las{' '}
        <span className="text-red-500 contrast-200 font-bold text-4xl  ">
          {quantity}
        </span>{' '}
        parejas en{' '}
        <span className="text-red-500 contrast-200 font-bold text-4xl">
          {turns}
        </span>{' '}
        intentos.
      </h3>

      <button
        className=" text-lg sm:text-2xl mx-auto w-64 text-white font-bold bg-violet-600 border-2  py-2 rounded-lg hover:bg-violet-900 transition-all duration-500	"
        onClick={handleClick}
      >
        Jugar
      </button>
    </Layout1>
  );
};

export default Result;
