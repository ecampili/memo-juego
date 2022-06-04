import React from 'react';

const Counter = ({ quantity, setQuantity, min, max }) => {
  const handleDecrement = () => {
    if (quantity > min) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="w-80 flex justify-around   font-bold text-xl items-center mb-10  border-2 p-5 rounded-2xl bg-violet-400 ">
      <button
        className="bg-slate-300 text-violet-900 hover:bg-violet-900 hover:text-slate-300 rounded-full w-8 h-8 "
        onClick={handleDecrement}
      >
        -
      </button>
      <h5 className="text-violet-900 font-bold text-2xl">{quantity}</h5>
      <button
        className="bg-slate-300 text-violet-900 hover:bg-violet-900 hover:text-slate-300 rounded-full w-8 h-8 "
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
