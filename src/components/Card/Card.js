import React from 'react';

const Card = ({ pk, handleChoice, flipped, disabled }) => {
  // const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    if (!disabled) {
      handleChoice(pk);
    }
  };

  return (
    <div className="shadow-lg  w-[70px] h-[70px] md:w-[140px] md:h-[140px] sm:w-[100px] sm:h-[100px] bg-transparent cursor-pointer group perspective ">
      <div
        className={`${
          flipped ? 'preserve-3d my-rotate-y-180 ' : ''
        }relative  w-full h-full duration-1000`}
      >
        <div
          className={`${
            flipped ? 'my-rotate-y-180 backface-hidden' : ''
          } rounded-2xl absolute    w-full h-full bg-gray-100 overflow-hidden text-center`}
        >
          <img
            src={pk.image}
            className="w-full h-full pt-2 pb-0  sm:pb-7"
            alt={pk.name}
          />
          <h4
            className={`${
              !flipped ? 'hidden' : ''
            }absolute bottom-0 left-0 right-0 m-auto text-white bg-violet-900 hidden sm:block z-10`}
          >
            {pk.name}
          </h4>
        </div>
        {/* back side */}
        <div
          className=" bg-white  rounded-2xl absolute backface-hidden border-2 w-full h-full"
          onClick={handleClick}
        >
          <img
            src="./images/cover.jpeg"
            className="w-full h-full opacity-70 rounded-2xl"
            alt="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
