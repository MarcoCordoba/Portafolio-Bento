import React from 'react';

const BentoGrid = ({ children, className = '' }) => {
  return (
    <div className={`
      grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 
      auto-rows-[180px] gap-4 p-4 max-w-6xl mx-auto
      ${className}
    `}>
      {children}
    </div>
  );
};

export default BentoGrid;