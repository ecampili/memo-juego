import React from 'react';
import Counter from './Counter';
import Layout1 from './Layout1';

const options = [];
for (let i = 2; i <= 12; i++) {
  options.push({ value: i, label: i.toString() });
}

const Settings = ({
  quantity,
  setQuantity,
  turns,
  setStart,
  difficulty,
  setDifficulty,
}) => {
  const handleClick = () => {
    setStart(false);
  };

  const handleChange = (e) => {
    setDifficulty(e.target.value);
  };

  return (
    <Layout1>
      <h1 className="text-4xl sm:text-5xl md:text-7xl text-white font-bold drop-shadow-2xl contrast-200	">
        Memo<span className="text-red-500">Juego</span>
      </h1>

      <h4 className="mt-5 text-white text-md sm:text-xl p-2">
        Cantidad de personajes
      </h4>

      <Counter quantity={quantity} setQuantity={setQuantity} min={2} max={12} />

      <div>
        <h4 className="text-white text-md sm:text-xl ">Dificultad</h4>

        <div className=" bg-violet-400 border-2 p-5 rounded-2xl mt-2  mb-10 flex  flex-col sm:flex-row gap-5 text-md   justify-center items-start text-violet-900">
          <div>
            <input
              type="radio"
              value="2000"
              id="facil"
              name="facil"
              checked={difficulty === '2000'}
              onChange={handleChange}
              className="mr-2 cursor-pointer "
            />
            <label htmlFor="facil" className="cursor-pointer ">
              Fácil
            </label>
          </div>
          <div>
            <input
              type="radio"
              value="1500"
              id="medio"
              name="medio"
              checked={difficulty === '1500'}
              onChange={handleChange}
              className="mr-2 cursor-pointer"
            />
            <label htmlFor="medio" className="cursor-pointer">
              {' '}
              Medio
            </label>
          </div>
          <div>
            <input
              type="radio"
              value="1000"
              id="dificil"
              name="dificil"
              checked={difficulty === '1000'}
              onChange={handleChange}
              className="mr-2 cursor-pointer"
            />
            <label htmlFor="dificil" className="cursor-pointer">
              {' '}
              Dificil
            </label>
          </div>
        </div>
      </div>

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
