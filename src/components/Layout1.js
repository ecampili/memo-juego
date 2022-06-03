import React from 'react';

const Layout1 = ({ children }) => {
  return (
    <div className="bg-gradient-to-b from-violet-500 to-violet-800 min-h-screen">
      <div className="container mx-auto text-center p-5 h-screen flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default Layout1;
