import React from 'react';
import Counter from './Counter';
import Layout1 from './Layout1';

const options = [];
for (let i = 2; i <= 12; i++) {
  options.push({ value: i, label: i.toString() });
}

const Settings = ({ quantity, setQuantity, turns, setStart }) => {
  const handleClick = () => {
    setStart(false);
  };
  return (
    <Layout1>
      <h1 className="text-7xl text-white font-bold drop-shadow-2xl contrast-200	">
        Memo<span className="text-red-500">Juego</span>
      </h1>

      <h4 className="mt-5 text-white text-lg sm:text-2xl p-2">
        Seleccioná la cantidad de personajes
      </h4>

      <Counter quantity={quantity} setQuantity={setQuantity} min={2} max={12} />

      <button
        className=" text-lg sm:text-2xl mx-auto w-64 text-white font-bold bg-violet-600 border-2  py-2 rounded-lg hover:bg-violet-900 transition-all duration-500	"
        onClick={handleClick}
      >
        Jugar
      </button>
    </Layout1>
  );
};

export default Settings;
