import React from 'react';
import { Settings, LogOut, Sun, Moon, Menu } from "lucide-react";

const Sidebar = ({ activeMenu, setActiveMenu, darkMode, setDarkMode }) => {
  return (
    <div className="w-48 bg-white dark:bg-black shadow-md p-4 flex flex-col flex-shrink-0">
      <div className="flex items-center gap-2 mb-8">
        <Menu size={24} />
        <h1 className="text-xl font-bold text-black dark:text-white">Panjab Pizza(Cashier)</h1>
      </div>

      <nav className="flex-1">
        <button
          className={`w-full text-left px-4 py-3 mb-2 rounded transition-colors ${
            activeMenu === 'NewOrder' ? 'bg-gray-800 dark:bg-gray-700 text-white' : 'text-gray-400 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white'
          }`}
          onClick={() => setActiveMenu('NewOrder')}
        >
          New Order
        </button>
        <button
          className={`w-full text-left px-4 py-3 mb-2 rounded transition-colors ${
            activeMenu === 'Orders' ? 'bg-gray-800 dark:bg-gray-700 text-white' : 'text-gray-400 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white'
          }`}
          onClick={() => setActiveMenu('Orders')}
        >
          Orders
        </button>
        <button
          className={`w-full text-left px-4 py-3 mb-2 rounded transition-colors ${
            activeMenu === 'Invoices' ? 'bg-gray-800 dark:bg-gray-700 text-white' : 'text-gray-400 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white'
          }`}
          onClick={() => setActiveMenu('Invoices')}
        >
          Invoices
        </button>
        <button
          className={`w-full text-left px-4 py-3 mb-2 rounded transition-colors ${
            activeMenu === 'OrderScreen' ? 'bg-gray-800 dark:bg-gray-700 text-white' : 'text-gray-400 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white'
          }`}
          onClick={() => setActiveMenu('OrderScreen')}
        >
          Order Screen
        </button>
        <button
          className={`w-full text-left px-4 py-3 mb-2 rounded transition-colors ${
            activeMenu === 'OrderNotifications' ? 'bg-gray-800 dark:bg-gray-700 text-white' : 'text-gray-400 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white'
          }`}
          onClick={() => setActiveMenu('OrderNotifications')}
        >
          Order Notifications
        </button>
      </nav>

      <div className="mt-auto">
        <div className="flex items-center gap-2 mb-3 px-2 py-2 rounded-full bg-gray-800 cursor-pointer hover:bg-gray-700 transition-colors">
          <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center text-sm font-semibold">L</div>
          <span className="text-sm text-black dark:text-white">Leslie K.</span>
        </div>

        <div className="flex items-center  justify-center gap-6 p-4 ml-1 dark:bg-gray-900 rounded-xl shadow-md">
          {/* Settings Icon */}
          <button
            className="p-2 rounded-full hover:bg-gray-700 transition"
            title="Settings"
          >
            <Settings className="w-6 h-6 text-gray-300 dark:text-gray-300" />
          </button>

          {/* Day/Night Toggle */}
          <button
            onClick={() => setDarkMode()}
            className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-700 transition"
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? (
              <Moon className="w-6 h-6 text-yellow-400" />
            ) : (
              <Sun className="w-6 h-6 text-yellow-500" />
            )}
          </button>

          {/* Exit Icon */}
          <button
            className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-700 transition"
            title="Exit"
          >
            <LogOut className="w-6 h-6 text-red-500" />
          </button>
        </div>
      </div>
      <div className="text-xs text-gray-600 mt-4">
        © 2022 CosyPOS App
      </div>
    </div>
  );
};

export default Sidebar;
