import React from 'react';

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

  //   const handleSettings = () => {
  //     setTurns(0);
  //     setFinished(false);
  //     setStart(true);
  //   };
  return (
    <div className="min-h-[400px]  flex flex-col justify-center rounded-lg items-center">
      <div className="mb-16">
        <h1 className="text-5xl text-white  mb-10">Genial!!!</h1>
        <h3 className="text-2xl text-white ">
          Has descubierto las {quantity} parejas en {turns} intentos.
        </h3>
      </div>

      <button
        className=" text-lg sm:text-2xl mx-auto w-64 text-white font-bold bg-violet-600 border-2  py-2 rounded-lg hover:bg-violet-900 transition-all duration-500	"
        onClick={handleClick}
      >
        Volver a jugar
      </button>
      {/* <button
        className="text-white font-bold bg-blue-500 border-2  py-2 px-10 rounded-lg hover:bg-blue-600 transition-all duration-500	"
        onClick={handleSettings}
      >
        Change Settings
      </button> */}
    </div>
  );
};

export default Result;
