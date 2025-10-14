// src/components/layout/Navigation.jsx
import React from 'react';

const Navigation = ({ activeCategory, onCategoryChange }) => {
  const menuCategories = [
    { id: 'create-your-own', label: 'Create Your Own', icon: '🍕' },
    { id: 'deals', label: 'Deals', icon: '🎯' },
    { id: 'signatures', label: 'Signatures', icon: '⭐' },
    { id: 'others', label: 'Others', icon: '🍴' },
    { id: 'sides', label: 'Sides', icon: '🍟' },
    { id: 'dips', label: 'Dips', icon: '🥣' },
    { id: 'drinks', label: 'Drinks', icon: '🥤' }
  ];

  const systemCategories = [
    { id: 'new-order', label: 'New Order', icon: '🆕' },
    { id: 'orders', label: 'Orders', icon: '📋' },
    { id: 'invoices', label: 'Invoices', icon: '🧾' },
    { id: 'order-screen', label: 'Order Screen', icon: '📺' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' }
  ];

  return (
    <div className="w-64 bg-gray-800 flex flex-col h-full">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-green-400">CosyPOS</h1>
        <p className="text-gray-400 text-sm">Pizza Restaurant</p>
      </div>

      {/* Menu Categories */}
      <div className="flex-1 p-4">
        <h3 className="text-gray-400 text-sm font-semibold mb-3 uppercase tracking-wide">Menu</h3>
        <nav className="space-y-1">
          {menuCategories.map(category => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                activeCategory === category.id
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* System Categories */}
      <div className="p-4 border-t border-gray-700">
        <h3 className="text-gray-400 text-sm font-semibold mb-3 uppercase tracking-wide">System</h3>
        <nav className="space-y-1">
          {systemCategories.map(category => (
            <button
              key={category.id}
              className="w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center space-x-3 text-gray-300 hover:bg-gray-700"
            >
              <span className="text-lg">{category.icon}</span>
              <span className="font-medium">{category.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navigation;