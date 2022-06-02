import React from 'react';

const Card = ({ pk }) => {
  return (
    <div className="   shadow-lg  w-[100px] h-[100px] md:w-[140px] md:h-[140px] sm:w-[100px] sm:h-[100px] bg-transparent cursor-pointer group perspective ">
      <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
        <div className=" bg-myblue  rounded-2xl absolute backface-hidden border-2 w-full h-full">
          {/* <img
            src="./images/cover.jpeg"
            className="w-full h-full opacity-70 rounded-2xl"
            alt="cover"
          /> */}
        </div>
        <div className=" rounded-2xl absolute  my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden text-center">
          <img
            src={pk.image}
            className="w-full h-full pt-2 pb-7 "
            alt={pk.name}
          />
          <h4 className="absolute bottom-0 left-0 right-0 m-auto text-white bg-black  z-10">
            {pk.name}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
