import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Invoices from '../../components/Invoices';
import MainContent from '../../components/main/MainContent';
import MobileView from '../../components/MobileView';
import Sidebar from '../../components/Sidebar';
import { useMenuData } from '../../hooks/useMenuData';
import NewOrder from '../../orders/NewOrder';
import OrderNotifications from '../../orders/OrderNotifications';
import Orders from '../../orders/Orders';
import OrderScreen from '../../orders/OrderScreen';
import OrderSummary from '../../orders/OrderSummary';
import {
  addToOrder,
  decrementMenuItem,
  placeOrder,
  removeItem,
  setPaymentMethod,
  updateOrderQuantity
} from '../../store/slices/orderSlice';
import {
  setActiveMenu,
  setIsMobile,
  setSelectedCategory,
  toggleDarkMode
} from '../../store/slices/uiSlice';

const Dashbord = () => {
  const dispatch = useDispatch();
  const { data: menuData, isLoading, error } = useMenuData();

  const {
    orderItems,
    menuItemsState,
    selectedTable,
    paymentMethod
  } = useSelector(state => state.order);

  const {
    activeMenu,
    selectedCategory,
    darkMode,
    isMobile
  } = useSelector(state => state.ui);

  // Apply/remove dark mode class on the root HTML element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const checkScreenSize = () => {
      dispatch(setIsMobile(window.innerWidth < 1024));
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, [dispatch]);

  const menuCategories = menuData?.categories || [];
  const menuItems = menuData?.items || [];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleAddToOrder = (menuItem) => {
    dispatch(addToOrder(menuItem));
  };

  const handleDecrementMenuItem = (menuItem) => {
    dispatch(decrementMenuItem(menuItem));
  };

  const handleUpdateOrderQuantity = (id, change) => {
    dispatch(updateOrderQuantity({ id, change }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleSetPaymentMethod = (method) => {
    dispatch(setPaymentMethod(method));
  };

  const handlePlaceOrder = () => {
    if (orderItems.length === 0) {
      toast.error('Please add items to the order first!');
      return;
    }

    toast.success(`Order placed successfully!\nTable: ${selectedTable.number}\nTotal: $${total.toFixed(2)}\nPayment: ${paymentMethod}`);
    dispatch(placeOrder());
  };

  const handleSetSelectedCategory = (category) => {
    dispatch(setSelectedCategory(category));
  };

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode(!darkMode));
  };

  const handleSetActiveMenu = (menu) => {
    dispatch(setActiveMenu(menu));
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 dark:bg-gray-900 text-white dark:text-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white dark:border-white mx-auto mb-4"></div>
          <p>Loading menu data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 dark:bg-gray-900 text-white dark:text-white">
        <div className="text-center">
          <p className="text-red-500 mb-4">Error loading menu data</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (isMobile) {
    return <MobileView />;
  }

  const renderMainContent = () => {
    switch (activeMenu) {
      case 'NewOrder':
        return <NewOrder />;
      case 'Orders':
        return <Orders />;
      case 'Invoices':
        return <Invoices />;
      case 'OrderScreen':
        return <OrderScreen />;
      case 'OrderNotifications':
        return <OrderNotifications />;
      default:
        return (
          <MainContent
            selectedCategory={selectedCategory}
            setSelectedCategory={handleSetSelectedCategory}
            menuCategories={menuCategories}
            menuItems={menuItems}
            menuItemsState={menuItemsState}
            addToOrder={handleAddToOrder}
            decrementMenuItem={handleDecrementMenuItem}
          />
        );
    }
  };

  return (
    <div className="flex h-screen bg-white dark:bg-gray-900 text-black dark:text-white font-sans overflow-hidden hide-scrollbar">
      <Sidebar
        activeMenu={activeMenu}
        setActiveMenu={handleSetActiveMenu}
        darkMode={darkMode}
        setDarkMode={handleToggleDarkMode}
      />
      {renderMainContent()}
      <OrderSummary
        selectedTable={selectedTable}
        orderItems={orderItems}
        updateOrderQuantity={handleUpdateOrderQuantity}
        removeItem={handleRemoveItem}
        subtotal={subtotal}
        tax={tax}
        total={total}
        paymentMethod={paymentMethod}
        setPaymentMethod={handleSetPaymentMethod}
        placeOrder={handlePlaceOrder}
      />
    </div>
  );
};

export default Dashbord;
