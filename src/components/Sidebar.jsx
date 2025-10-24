
import { Bell, FileText, List, LogOut, Menu, Monitor, Moon, Plus, Settings, Sun } from "lucide-react";
import { useState } from 'react';

const Sidebar = ({ activeMenu, setActiveMenu, darkMode, setDarkMode }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`${isCollapsed ? 'w-16' : 'w-56'} bg-white dark:bg-cosy-gray-900 shadow-cosy-lg flex flex-col flex-shrink-0 transition-all duration-300 rounded-cosy`}>
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-3">
        {!isCollapsed && <h1 className="text-lg font-display font-bold text-cosy-gray-900 dark:text-white">Panjab Pizza(Cashier)</h1>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-cosy hover:bg-cosy-gray-100 dark:hover:bg-cosy-gray-800 transition-colors"
        >
          <Menu size={18} className="text-cosy-gray-600 dark:text-cosy-gray-400" />
        </button>
      </div>

      {/* Menu Buttons */}
      <nav className={`flex-1 flex flex-col ${isCollapsed ? 'items-center gap-2' : 'items-start gap-2'} px-1`}>
        {[
          { name: 'NewOrder', icon: Plus },
          { name: 'Orders', icon: List },
          { name: 'Invoices', icon: FileText },
          { name: 'OrderScreen', icon: Monitor },
          { name: 'OrderNotifications', icon: Bell },
        ].map((menu) => {
          const Icon = menu.icon;
          const isActive = activeMenu === menu.name;

          return (
            <button
              key={menu.name}
              onClick={() => setActiveMenu(menu.name)}
              className={`flex items-center transition-all duration-200 py-2
                ${isCollapsed ? 'justify-center w-10' : 'justify-start w-full gap-2 px-3'}
                ${isActive ? 'bg-cosy-orange text-white shadow-cosy-md' : 'text-cosy-gray-700 dark:text-cosy-gray-300 hover:bg-cosy-gray-50 dark:hover:bg-cosy-gray-800 hover:shadow-cosy-sm'}
                ${isCollapsed && isActive ? 'rounded-full' : 'rounded-cosy'}
              `}
            >
              <Icon
                size={isCollapsed ? 20 : 16}
                className={`${isActive ? 'text-white' : 'text-cosy-gray-600 dark:text-cosy-gray-400'}`}
              />
              {!isCollapsed && <span className="font-medium text-sm">{menu.name === 'NewOrder' ? 'New Order' : menu.name}</span>}
            </button>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div className={`mt-auto flex flex-col ${isCollapsed ? 'items-center gap-2 py-2' : 'items-start gap-2 p-3'}`}>
        {/* Profile */}
        {isCollapsed ? (
          <div className="w-7 h-7 rounded-full bg-cosy-orange flex items-center justify-center text-xs font-semibold text-white mb-2">L</div>
        ) : (
          <div className="flex items-center gap-2 px-2 py-2 rounded-cosy bg-cosy-gray-50 dark:bg-cosy-gray-800 cursor-pointer hover:bg-cosy-gray-100 dark:hover:bg-cosy-gray-700 transition-colors mb-2">
            <div className="w-7 h-7 rounded-full bg-cosy-orange flex items-center justify-center text-xs font-semibold text-white">L</div>
            <span className="text-sm font-medium text-cosy-gray-900 dark:text-white">Leslie K.</span>
          </div>
        )}

        {/* Bottom buttons */}
        <div className={`flex ${isCollapsed ? 'flex-col items-center gap-2' : 'flex-row items-center gap-2'} w-full`}>
          <button className={`${isCollapsed ? 'p-2 rounded-full' : 'p-2 rounded-cosy'} hover:bg-cosy-gray-200 dark:hover:bg-cosy-gray-700 transition-colors`}>
            <Settings className={`${isCollapsed ? 'w-5 h-5' : 'w-5 h-5'} text-cosy-gray-600 dark:text-cosy-gray-400`} />
          </button>

          <button
            onClick={() => setDarkMode(prev => !prev)}
            className={`${isCollapsed ? 'p-2 rounded-full' : 'p-2 rounded-cosy'} hover:bg-cosy-gray-200 dark:hover:bg-cosy-gray-700 transition-colors`}
          >
            {darkMode ? (
              <Moon className={`${isCollapsed ? 'w-5 h-5' : 'w-5 h-5'} text-yellow-400`} />
            ) : (
              <Sun className={`${isCollapsed ? 'w-5 h-5' : 'w-5 h-5'} text-yellow-500`} />
            )}
          </button>

          <button className={`${isCollapsed ? 'p-2 rounded-full' : 'p-2 rounded-cosy'} hover:bg-cosy-gray-200 dark:hover:bg-cosy-gray-700 transition-colors`}>
            <LogOut className={`${isCollapsed ? 'w-5 h-5' : 'w-5 h-5'} text-red-500`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
