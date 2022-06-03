import { useState, useEffect } from 'react';
import Card from './components/Card/Card';
import Result from './components/Result';
import { getCharacters } from './utils/getCharacters';
import confetti from 'canvas-confetti';
import Settings from './components/Settings';

const options = [];
for (let i = 2; i <= 12; i++) {
  options.push({ value: i, label: i.toString() });
}

function App() {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(2);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [finished, setFinished] = useState(false);
  const [start, setStart] = useState(true);

  // trae los Characters y los  duplica y los mezcla
  useEffect(() => {
    if (start === false) {
      const selected = getCharacters(quantity);
      const duplicate = [...selected, ...selected]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
      setItems(duplicate);
    }
  }, [start, quantity]);

  // handle a Choice
  const handleChoice = (pk) => {
    choiceOne ? setChoiceTwo(pk) : setChoiceOne(pk);
  };

  useEffect(() => {
    const isFinished = () =>
      items.every((card) => {
        return card.matched === true;
      });

    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.name === choiceTwo.name) {
        setItems((prevCards) => {
          return prevCards.map((pk) => {
            if (pk.name === choiceOne.name) {
              pk.matched = true;
              setFinished(isFinished());
              return pk;
            } else {
              return pk;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [choiceOne, choiceTwo, items]);

  useEffect(() => {
    if (finished) {
      confetti({
        zIndex: 999,
        particleCount: 200,
        spread: 160,
        angle: -100,
        gravity: 0.5,
        tics: 400,
        origin: {
          x: 0.5,
          y: 0,
        },
      });

      // setTimeout(() => {
      //   setFinished(false);
      //   setStart(true);
      // }, 3000);

      // setTurns(0);
    }
  }, [finished]);

  // reset choices and increase
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  if (start) {
    return (
      <Settings
        quantity={quantity}
        setQuantity={setQuantity}
        turns={turns}
        setStart={setStart}
      />
    );
  } else {
    return (
      <div className="bg-violet-500 min-h-screen">
        <div className="container mx-auto text-center p-5 ">
          {/* <h1 className="text-4xl text-white font-bold ">
            Memo<span className="text-red-500">Juego</span>
          </h1> */}

          {finished ? (
            <Result
              turns={turns}
              setTurns={setTurns}
              setFinished={setFinished}
              setQuantity={setQuantity}
              quantity={quantity}
              setStart={setStart}
            />
          ) : (
            <>
              <div className="flex flex-wrap justify-center items-center gap-2 mt-5 min-h-[500px] ">
                {items?.map((pk, index) => (
                  // <img src={pk.src} alt={pk.name} key={pk.id} />
                  <Card
                    pk={pk}
                    key={index}
                    handleChoice={handleChoice}
                    flipped={pk === choiceOne || pk === choiceTwo || pk.matched}
                    disabled={disabled}
                  />
                ))}
              </div>
              <div className="mt-5  text-5xl text-white font-bold   mx-auto rounded-full text-center">{`${turns}`}</div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default App;
