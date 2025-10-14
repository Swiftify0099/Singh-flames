import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainContent from './MainContent';
import { useMenuData } from '../hooks/useMenuData';
import { addToOrder, decrementMenuItem } from '../store/slices/orderSlice';
import { setSelectedCategory } from '../store/slices/uiSlice';

const NewOrder = () => {
  const dispatch = useDispatch();
  const { data: menuData, isLoading, error } = useMenuData();

  const { menuItemsState } = useSelector(state => state.order);
  const { selectedCategory } = useSelector(state => state.ui);

  const menuCategories = menuData?.categories || [];
  const menuItems = menuData?.items || [];

  const handleAddToOrder = (menuItem) => {
    dispatch(addToOrder(menuItem));
  };

  const handleDecrementMenuItem = (menuItem) => {
    dispatch(decrementMenuItem(menuItem));
  };

  const handleSetSelectedCategory = (category) => {
    dispatch(setSelectedCategory(category));
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
};

export default NewOrder;
