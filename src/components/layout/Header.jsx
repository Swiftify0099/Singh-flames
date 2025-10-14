// src/components/layout/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-white">Pizza POS System</h2>
          <p className="text-gray-400 text-sm">Welcome back, Operator!</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-white font-medium">Table: 05</p>
            <p className="text-gray-400 text-sm">Order #1245</p>
          </div>
          <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <span className="font-semibold">OP</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
