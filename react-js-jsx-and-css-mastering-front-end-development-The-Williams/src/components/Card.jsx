import React from 'react';

const Card = ({ title, children }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
    {title && <h3 className="text-lg font-bold mb-2">{title}</h3>}
    {children}
  </div>
);

export default Card;
