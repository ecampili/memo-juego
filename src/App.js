import { useState, useEffect } from 'react';
import Card from './components/Card/Card';
import Result from './components/Result';
import { getCharacters } from './utils/getCharacters';
import confetti from 'canvas-confetti';
import Settings from './components/Settings';

import MainLayout from './components/MainLayout';

function App() {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(3);
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
  }

  if (finished) {
    return (
      <Result
        turns={turns}
        setTurns={setTurns}
        setFinished={setFinished}
        setQuantity={setQuantity}
        quantity={quantity}
        setStart={setStart}
      />
    );
  } else {
    return (
      <MainLayout
        setTurns={setTurns}
        setFinished={setFinished}
        setStart={setStart}
      >
        <div className="flex flex-wrap justify-center items-center gap-2  ">
          {items?.map((pk, index) => (
            <Card
              pk={pk}
              key={index}
              handleChoice={handleChoice}
              flipped={pk === choiceOne || pk === choiceTwo || pk.matched}
              disabled={disabled}
            />
          ))}
        </div>
        <div className="text-center mt-10 text-4xl pb-1 text-white font-bold   ">
          {`${turns}`}
        </div>
      </MainLayout>
    );
  }
}

export default App;
