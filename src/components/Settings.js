import React from 'react';

const options = [];
for (let i = 2; i <= 12; i++) {
  options.push({ value: i, label: i.toString() });
}

const Settings = ({ quantity, setQuantity, turns, setStart }) => {
  const handleClick = () => {
    setStart(false);
  };
  return (
    <div className="bg-violet-500 min-h-screen">
      <div className="container mx-auto text-center p-5 h-screen flex flex-col items-center justify-center">
        <h1 className="text-7xl text-white font-bold drop-shadow-2xl contrast-200	">
          Memo<span className="text-red-500">Juego</span>
        </h1>
        {/* <div className="  w-[50%] h-[400px]  mt-10 flex flex-col  "> */}
        {/* <h3 className="text-center text-white font-bold ">Configuración</h3> */}
        <div className=" flex justify-center items-center m-10">
          <label className="mr-2 text-white text-lg sm:text-2xl p-2">
            Seleccioná la cantidad de personajes:
          </label>
          <select
            className="appearance-none w-10 text-center"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            //   disabled={turns !== 0}
          >
            {options.map(({ value, label }, index) => (
              <option value={value} key={index}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <button
          className=" text-lg sm:text-2xl mx-auto w-64 text-white font-bold bg-violet-600 border-2  py-2 rounded-lg hover:bg-violet-900 transition-all duration-500	"
          onClick={handleClick}
        >
          Jugar
        </button>
      </div>
    </div>
    // </div>
  );
};

export default Settings;
