import React from 'react';

const Footer = ({ text }) => {
  return (
    <div className="sticky bottom-0 text-5xl pb-1 text-white font-bold   ">
      {`${text}`}
    </div>
  );
};

export default Footer;
