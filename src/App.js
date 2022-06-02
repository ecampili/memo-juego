import { useState, useEffect } from 'react';
import Card from './components/Card/Card';
import { getCharacters } from './utils/getCharacters';

const options = [];
for (let i = 2; i <= 12; i++) {
  options.push({ value: i, label: i.toString() });
}

function App() {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(2);

  useEffect(() => {
    const selected = getCharacters(quantity);
    const duplicate = [...selected, ...selected].sort(
      () => Math.random() - 0.5
    );
    setItems(duplicate);
  }, [quantity]);

  return (
    <div className="bg-violet-500 min-h-screen">
      <div className="container mx-auto text-center p-5 ">
        <h1 className="text-4xl text-white font-bold ">
          Memo<span className="text-red-500">Juego</span>
        </h1>
        <div className="m-5">
          <label className="mr-2 text-white">Cantidad de personajes: </label>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {options.map(({ value, label }, index) => (
              <option value={value} key={index}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-5">
          {items?.map((pk, index) => (
            // <img src={pk.src} alt={pk.name} key={pk.id} />
            <Card pk={pk} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
