// import { Bell, FileText, List, LogOut, Menu, Monitor, Moon, Plus, Settings, Sun } from "lucide-react";
// import { useState } from 'react';

// const Sidebar = ({ activeMenu, setActiveMenu, darkMode, setDarkMode }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   return (
//     <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-white dark:bg-cosy-gray-900 shadow-cosy-lg p-6 flex flex-col flex-shrink-0 transition-all duration-300 rounded-cosy`}>
//       <div className="flex items-center justify-between mb-8">
//         <div className="flex items-center gap-3">
//           {!isCollapsed && <h1 className="text-xl font-display font-bold text-cosy-gray-900 dark:text-white">Panjab Pizza(Cashier)</h1>}
//         </div>
//         <button
//           onClick={() => setIsCollapsed(!isCollapsed)}
//           className="p-2 rounded-cosy hover:bg-cosy-gray-100 dark:hover:bg-cosy-gray-800 transition-colors"
//         >
//           <Menu size={20} className="text-cosy-gray-600 dark:text-cosy-gray-400" />
//         </button>
//       </div>

//       <nav className="flex-1">
//         {/* <button
//           className={`w-full ${isCollapsed ? 'justify-center' : 'text-left'} px-4 py-3 mb-2 rounded transition-colors flex items-center gap-3 ${
//             activeMenu === 'NewOrder' ? 'bg-gray-800 dark:bg-gray-700 text-white' : 'text-gray-400 dark:text-gray-300 hover:bg-gray-800 dark:hover:bg-gray-700 hover:text-white'
//           }`}
//           onClick={() => setActiveMenu('NewOrder')}
//         >
//           <Plus size={20} />
//           {!isCollapsed && 'New Order'}
//         </button> */}

//         <button
//           className={`w-full flex items-center rounded-cosy transition-all duration-200 py-3 mb-3
//     ${isCollapsed ? 'justify-center px-2 bg-cosy-gray-50 dark:bg-cosy-gray-800' : 'justify-start px-4 gap-3'}
//     ${activeMenu === 'NewOrder'
//               ? 'bg-cosy-orange text-white shadow-cosy-md'
//               : 'text-cosy-gray-700 dark:text-cosy-gray-300 hover:bg-cosy-gray-50 dark:hover:bg-cosy-gray-800 hover:shadow-cosy-sm'
//             }`}
//           onClick={() => setActiveMenu('NewOrder')}
//         >
//           <Plus size={isCollapsed ? 24 : 20} className={activeMenu === 'NewOrder' ? 'text-white' : isCollapsed ? 'text-cosy-gray-700 dark:text-white' : 'text-cosy-gray-600 dark:text-cosy-gray-400'} />
//           {!isCollapsed && <span className="font-medium">New Order</span>}
//         </button>

//         <button
//           className={`w-full flex items-center rounded-cosy transition-all duration-200 py-3 mb-3
//     ${isCollapsed ? 'justify-center px-2' : 'justify-start px-4 gap-3'}
//     ${activeMenu === 'Orders'
//               ? 'bg-cosy-orange text-white shadow-cosy-md'
//               : 'text-cosy-gray-700 dark:text-cosy-gray-300 hover:bg-cosy-gray-50 dark:hover:bg-cosy-gray-800 hover:shadow-cosy-sm'
//             }`}
//           onClick={() => setActiveMenu('Orders')}
//         >
//           <List size={isCollapsed ? 24 : 20} className={activeMenu === 'Orders' ? 'text-white' : isCollapsed ? 'text-cosy-gray-700 dark:text-white' : 'text-cosy-gray-600 dark:text-cosy-gray-400'} />
//           {!isCollapsed && <span className="font-medium">Orders</span>}
//         </button>
//         <button
//           className={`w-full flex items-center rounded-cosy transition-all duration-200 py-3 mb-3
//     ${isCollapsed ? 'justify-center px-2' : 'justify-start px-4 gap-3'}
//     ${activeMenu === 'Invoices'
//               ? 'bg-cosy-orange text-white shadow-cosy-md'
//               : 'text-cosy-gray-700 dark:text-cosy-gray-300 hover:bg-cosy-gray-50 dark:hover:bg-cosy-gray-800 hover:shadow-cosy-sm'
//             }`}
//           onClick={() => setActiveMenu('Invoices')}
//         >
//           <FileText size={isCollapsed ? 24 : 20} className={activeMenu === 'Invoices' ? 'text-white' : isCollapsed ? 'text-cosy-gray-700 dark:text-white' : 'text-cosy-gray-600 dark:text-cosy-gray-400'} />
//           {!isCollapsed && <span className="font-medium">Invoices</span>}
//         </button>
//         <button
//           className={`w-full flex items-center rounded-cosy transition-all duration-200 py-3 mb-3
//     ${isCollapsed ? 'justify-center px-2' : 'justify-start px-4 gap-3'}
//     ${activeMenu === 'OrderScreen'
//               ? 'bg-cosy-orange text-white shadow-cosy-md'
//               : 'text-cosy-gray-700 dark:text-cosy-gray-300 hover:bg-cosy-gray-50 dark:hover:bg-cosy-gray-800 hover:shadow-cosy-sm'
//             }`}
//           onClick={() => setActiveMenu('OrderScreen')}
//         >
//           <Monitor size={isCollapsed ? 24 : 20} className={activeMenu === 'OrderScreen' ? 'text-white' : isCollapsed ? 'text-cosy-gray-700 dark:text-white' : 'text-cosy-gray-600 dark:text-cosy-gray-400'} />
//           {!isCollapsed && <span className="font-medium">Order Screen</span>}
//         </button>
//         <button
//           className={`w-full flex items-center rounded-cosy transition-all duration-200 py-3 mb-3
//     ${isCollapsed ? 'justify-center px-2' : 'justify-start px-4 gap-3'}
//     ${activeMenu === 'OrderNotifications'
//               ? 'bg-cosy-orange text-white shadow-cosy-md'
//               : 'text-cosy-gray-700 dark:text-cosy-gray-300 hover:bg-cosy-gray-50 dark:hover:bg-cosy-gray-800 hover:shadow-cosy-sm'
//             }`}
//           onClick={() => setActiveMenu('OrderNotifications')}
//         >
//           <Bell size={isCollapsed ? 24 : 20} className={activeMenu === 'OrderNotifications' ? 'text-white' : isCollapsed ? 'text-cosy-gray-700 dark:text-white' : 'text-cosy-gray-600 dark:text-cosy-gray-400'} />
//           {!isCollapsed && <span className="font-medium">Order Notifications</span>}
//         </button>
//       </nav>

//       <div className="mt-auto">
//         {isCollapsed ? (
//           <div className="flex justify-center mb-4">
//             <div className="w-8 h-8 rounded-full bg-cosy-orange flex items-center justify-center text-sm font-semibold text-white">L</div>
//           </div>
//         ) : (
//           <div className="flex items-center gap-3 mb-4 px-3 py-3 rounded-cosy bg-cosy-gray-50 dark:bg-cosy-gray-800 cursor-pointer hover:bg-cosy-gray-100 dark:hover:bg-cosy-gray-700 transition-colors">
//             <div className="w-8 h-8 rounded-full bg-cosy-orange flex items-center justify-center text-sm font-semibold text-white">L</div>
//             <span className="text-sm font-medium text-cosy-gray-900 dark:text-white">Leslie K.</span>
//           </div>
//         )}

//         <div className={`flex items-center justify-center ${isCollapsed ? 'flex-col gap-3 p-2' : 'flex-row gap-4 p-4 bg-cosy-gray-50 dark:bg-cosy-gray-800 rounded-cosy shadow-cosy-sm'}`}>
//           {/* Settings Icon */}
//           <button
//             className={`${isCollapsed ? 'p-2' : 'p-3'} rounded-cosy hover:bg-cosy-gray-200 dark:hover:bg-cosy-gray-700 transition-colors`}
//             title="Settings"
//           >
//             <Settings className={`${isCollapsed ? 'w-5 h-5' : 'w-6 h-6'} text-cosy-gray-600 dark:text-cosy-gray-400`} />
//           </button>

//           {/* Day/Night Toggle */}
//           <button
//             onClick={() => setDarkMode(prev => !prev)}
//             className={`${isCollapsed ? 'p-2' : 'p-3'} rounded-cosy hover:bg-cosy-gray-200 dark:hover:bg-cosy-gray-700 transition-colors`}
//             title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//           >
//             {darkMode ? (
//               <Moon className={`${isCollapsed ? 'w-5 h-5' : 'w-6 h-6'} text-yellow-400`} />
//             ) : (
//               <Sun className={`${isCollapsed ? 'w-5 h-5' : 'w-6 h-6'} text-yellow-500`} />
//             )}
//           </button>

//           {/* Exit Icon */}
//           <button
//             className={`${isCollapsed ? 'p-2' : 'p-3'} rounded-cosy hover:bg-cosy-gray-200 dark:hover:bg-cosy-gray-700 transition-colors`}
//             title="Exit"
//           >
//             <LogOut className={`${isCollapsed ? 'w-5 h-5' : 'w-6 h-6'} text-red-500`} />
//           </button>
//         </div>
//       </div>
//       <div className={`text-xs text-cosy-gray-500 mt-4 ${isCollapsed ? 'text-center' : 'text-left'} font-medium`}>
//         Xster & Neosao
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import { Bell, FileText, List, LogOut, Menu, Monitor, Moon, Plus, Settings, Sun } from "lucide-react";
// import { useState } from 'react';

// const Sidebar = ({ activeMenu, setActiveMenu, darkMode, setDarkMode }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   return (
//     <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-white dark:bg-cosy-gray-900 shadow-cosy-lg p-6 flex flex-col flex-shrink-0 transition-all duration-300 rounded-cosy`}>
//       <div className="flex items-center justify-between mb-8">
//         <div className="flex items-center gap-3">
//           {!isCollapsed && <h1 className="text-xl font-display font-bold text-cosy-gray-900 dark:text-white">Panjab Pizza(Cashier)</h1>}
//         </div>
//         <button
//           onClick={() => setIsCollapsed(!isCollapsed)}
//           className="p-2 rounded-cosy hover:bg-cosy-gray-100 dark:hover:bg-cosy-gray-800 transition-colors"
//         >
//           <Menu size={20} className="text-cosy-gray-600 dark:text-cosy-gray-400" />
//         </button>
//       </div>

//       <nav className="flex-1">
//         {[
//           { name: 'NewOrder', icon: Plus },
//           { name: 'Orders', icon: List },
//           { name: 'Invoices', icon: FileText },
//           { name: 'OrderScreen', icon: Monitor },
//           { name: 'OrderNotifications', icon: Bell },
//         ].map((menu) => {
//           const Icon = menu.icon;
//           const isActive = activeMenu === menu.name;

//           return (
//             <button
//               key={menu.name}
//               onClick={() => setActiveMenu(menu.name)}
//               // className={`w-full flex items-center rounded-cosy transition-all duration-200 py-3 mb-3
//               //   ${isCollapsed ? 'justify-center px-2' : 'justify-start px-4 gap-3'}
//               //   ${isActive ? 'bg-cosy-orange text-white shadow-cosy-md' : 'text-cosy-gray-700 dark:text-cosy-gray-300 hover:bg-cosy-gray-50 dark:hover:bg-cosy-gray-800 hover:shadow-cosy-sm'}
//               // `}
//               className={`flex items-center rounded-cosy transition-all duration-200 py-3 mb-3
//   ${isCollapsed ? 'justify-center px-0 w-12' : 'justify-start px-4 gap-3 w-full'}
//   ${isActive ? 'bg-cosy-orange text-white shadow-cosy-md' : 'text-cosy-gray-700 dark:text-cosy-gray-300 hover:bg-cosy-gray-50 dark:hover:bg-cosy-gray-800 hover:shadow-cosy-sm'}
//   ${isCollapsed && isActive ? 'rounded-full' : 'rounded-cosy'}
// `}

//             >
//               <Icon
//                 size={isCollapsed ? 24 : 20}
//                 className={`flex-shrink-0 ${activeMenu === 'NewOrder' ? 'text-white' : 'text-cosy-gray-600 dark:text-cosy-gray-400'}`}
//               />
//               {!isCollapsed && <span className="font-medium">{menu.name === 'NewOrder' ? 'New Order' : menu.name}</span>}
//             </button>
//           );
//         })}
//       </nav>

//       <div className="mt-auto">
//         {isCollapsed ? (
//           <div className="flex justify-center mb-4">
//             <div className="w-8 h-8 rounded-full bg-cosy-orange flex items-center justify-center text-sm font-semibold text-white">L</div>
//           </div>
//         ) : (
//           <div className="flex items-center gap-3 mb-4 px-3 py-3 rounded-cosy bg-cosy-gray-50 dark:bg-cosy-gray-800 cursor-pointer hover:bg-cosy-gray-100 dark:hover:bg-cosy-gray-700 transition-colors">
//             <div className="w-8 h-8 rounded-full bg-cosy-orange flex items-center justify-center text-sm font-semibold text-white">L</div>
//             <span className="text-sm font-medium text-cosy-gray-900 dark:text-white">Leslie K.</span>
//           </div>
//         )}

//         <div className={`flex items-center justify-center ${isCollapsed ? 'flex-col gap-3 p-2' : 'flex-row gap-4 p-4 bg-cosy-gray-50 dark:bg-cosy-gray-800 rounded-cosy shadow-cosy-sm'}`}>
//           <button className={`${isCollapsed ? 'p-2' : 'p-3'} rounded-cosy hover:bg-cosy-gray-200 dark:hover:bg-cosy-gray-700 transition-colors`} title="Settings">
//             <Settings className={`${isCollapsed ? 'w-5 h-5' : 'w-6 h-6'} text-cosy-gray-600 dark:text-cosy-gray-400`} />
//           </button>

//           <button
//             onClick={() => setDarkMode(prev => !prev)}
//             className={`${isCollapsed ? 'p-2' : 'p-3'} rounded-cosy hover:bg-cosy-gray-200 dark:hover:bg-cosy-gray-700 transition-colors`}
//             title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
//           >
//             {darkMode ? (
//               <Moon className={`${isCollapsed ? 'w-5 h-5' : 'w-6 h-6'} text-yellow-400`} />
//             ) : (
//               <Sun className={`${isCollapsed ? 'w-5 h-5' : 'w-6 h-6'} text-yellow-500`} />
//             )}
//           </button>

//           <button className={`${isCollapsed ? 'p-2' : 'p-3'} rounded-cosy hover:bg-cosy-gray-200 dark:hover:bg-cosy-gray-700 transition-colors`} title="Exit">
//             <LogOut className={`${isCollapsed ? 'w-5 h-5' : 'w-6 h-6'} text-red-500`} />
//           </button>
//         </div>
//       </div>
//       <div className={`text-xs text-cosy-gray-500 mt-4 ${isCollapsed ? 'text-center' : 'text-left'} font-medium`}>
//         Xster & Neosao
//       </div>
//     </div>
//   );
// };

// export default Sidebar;


// import { Bell, FileText, List, LogOut, Menu, Monitor, Moon, Plus, Settings, Sun } from "lucide-react";
// import { useState } from 'react';

// const Sidebar = ({ activeMenu, setActiveMenu, darkMode, setDarkMode }) => {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   return (
//     <div className={`${isCollapsed ? 'w-16' : 'w-64'} bg-white dark:bg-cosy-gray-900 shadow-cosy-lg flex flex-col flex-shrink-0 transition-all duration-300 rounded-cosy`}>
      
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8 px-4">
//         {!isCollapsed && <h1 className="text-xl font-display font-bold text-cosy-gray-900 dark:text-white">Panjab Pizza(Cashier)</h1>}
//         <button
//           onClick={() => setIsCollapsed(!isCollapsed)}
//           className="p-2 rounded-cosy hover:bg-cosy-gray-100 dark:hover:bg-cosy-gray-800 transition-colors"
//         >
//           <Menu size={20} className="text-cosy-gray-600 dark:text-cosy-gray-400" />
//         </button>
//       </div>

//       {/* Menu Buttons */}
//       <nav className={`flex-1 flex flex-col ${isCollapsed ? 'items-center' : 'items-start'} px-2`}>
//         {[
//           { name: 'NewOrder', icon: Plus },
//           { name: 'Orders', icon: List },
//           { name: 'Invoices', icon: FileText },
//           { name: 'OrderScreen', icon: Monitor },
//           { name: 'OrderNotifications', icon: Bell },
//         ].map((menu) => {
//           const Icon = menu.icon;
//           const isActive = activeMenu === menu.name;

//           return (
//             <button
//               key={menu.name}
//               onClick={() => setActiveMenu(menu.name)}
//               className={`flex items-center transition-all duration-200 py-3 mb-3
//                 ${isCollapsed ? 'justify-center w-12' : 'justify-start w-full gap-3 px-4'}
//                 ${isActive ? 'bg-cosy-orange text-white shadow-cosy-md' : 'text-cosy-gray-700 dark:text-cosy-gray-300 hover:bg-cosy-gray-50 dark:hover:bg-cosy-gray-800 hover:shadow-cosy-sm'}
//                 ${isCollapsed && isActive ? 'rounded-full' : 'rounded-cosy'}
//               `}
//             >
//               <Icon
//                 size={isCollapsed ? 24 : 20}
//                 className={`${isActive ? 'text-white' : 'text-cosy-gray-600 dark:text-cosy-gray-400'}`}
//               />
//               {!isCollapsed && <span className="font-medium">{menu.name === 'NewOrder' ? 'New Order' : menu.name}</span>}
//             </button>
//           );
//         })}
//       </nav>

//       {/* Bottom Section */}
//       <div className={`mt-auto flex ${isCollapsed ? 'flex-col items-center gap-3 py-3' : 'flex-col items-start gap-4 p-4'}`}>
//         {/* Profile */}
//         {isCollapsed ? (
//           <div className="w-8 h-8 rounded-full bg-cosy-orange flex items-center justify-center text-sm font-semibold text-white mb-4">L</div>
//         ) : (
//           <div className="flex items-center gap-3 px-3 py-3 rounded-cosy bg-cosy-gray-50 dark:bg-cosy-gray-800 cursor-pointer hover:bg-cosy-gray-100 dark:hover:bg-cosy-gray-700 transition-colors mb-4">
//             <div className="w-8 h-8 rounded-full bg-cosy-orange flex items-center justify-center text-sm font-semibold text-white">L</div>
//             <span className="text-sm font-medium text-cosy-gray-900 dark:text-white">Leslie K.</span>
//           </div>
//         )}

//         {/* Bottom buttons */}
//         <div className={`flex ${isCollapsed ? 'flex-col items-center gap-3' : 'flex-row items-center gap-4'} w-full`}>
//           <button className={`${isCollapsed ? 'p-3 rounded-full' : 'p-3 rounded-cosy'} hover:bg-cosy-gray-200 dark:hover:bg-cosy-gray-700 transition-colors`}>
//             <Settings className={`${isCollapsed ? 'w-6 h-6' : 'w-6 h-6'} text-cosy-gray-600 dark:text-cosy-gray-400`} />
//           </button>

//           <button
//             onClick={() => setDarkMode(prev => !prev)}
//             className={`${isCollapsed ? 'p-3 rounded-full' : 'p-3 rounded-cosy'} hover:bg-cosy-gray-200 dark:hover:bg-cosy-gray-700 transition-colors`}
//           >
//             {darkMode ? (
//               <Moon className={`${isCollapsed ? 'w-6 h-6' : 'w-6 h-6'} text-yellow-400`} />
//             ) : (
//               <Sun className={`${isCollapsed ? 'w-6 h-6' : 'w-6 h-6'} text-yellow-500`} />
//             )}
//           </button>

//           <button className={`${isCollapsed ? 'p-3 rounded-full' : 'p-3 rounded-cosy'} hover:bg-cosy-gray-200 dark:hover:bg-cosy-gray-700 transition-colors`}>
//             <LogOut className={`${isCollapsed ? 'w-6 h-6' : 'w-6 h-6'} text-red-500`} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;




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
