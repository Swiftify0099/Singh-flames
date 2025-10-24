import { useState } from 'react';
import { deals, dips, drinks, sides, signatures } from "../utils/data.js";
import CategoryGrid from './CategoryGrid.jsx';
import CategoryItems from './CategoryItems.jsx';
import CustomizePizzaPopup from './CustomizePizzaPopup.jsx';
import DealsPopup from './DealsPopup.jsx';

const MainContent = ({
  selectedCategory,
  setSelectedCategory,
  menuCategories,
  menuItems,
  menuItemsState,
  addToOrder,
  decrementMenuItem
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupCategory, setPopupCategory] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedBase, setSelectedBase] = useState(null);
  const [selectedSauce, setSelectedSauce] = useState(null);
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [isCustomizePopupOpen, setIsCustomizePopupOpen] = useState(false);
  const [selectedDealItem, setSelectedDealItem] = useState(null);
  const [recentCustomPizzas, setRecentCustomPizzas] = useState([
    {
      id: 'recent1',
      name: 'Custom Pizza',
      size: 'Large',
      base: 'Thin Crust',
      toppings: ['pepperoni', 'mushrooms', 'onions'],
      price: 16.47
    },
    {
      id: 'recent2',
      name: 'Custom Pizza',
      size: 'Medium',
      base: 'Thick Crust',
      toppings: ['extraCheese', 'olives'],
      price: 14.49
    }
  ]);
  const [showRecentOrders, setShowRecentOrders] = useState(false);

  const handleCategoryClick = (categoryName) => {
    if (categoryName === 'Create Your Own') {
      setPopupCategory(categoryName);
      setIsPopupOpen(true);
      setSelectedCategory(null);
      setShowRecentOrders(true);
    } else {
      setSelectedCategory(categoryName);
      setIsPopupOpen(false);
      setShowRecentOrders(false);
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupCategory(null);
    setSelectedSize(null);
    setSelectedBase(null);
    setSelectedSauce(null);
    setSelectedToppings([]);
  };

  const getItemsByCategory = (category) => {
    switch (category) {
      case 'Deals': return deals.map(i => ({ ...i, category }));
      case 'Signatures': return signatures.map(i => ({ ...i, category }));
      case 'Sides': return sides.map(i => ({ ...i, category }));
      case 'Drinks': return drinks.map(i => ({ ...i, category }));
      case 'Dips': return dips.map(i => ({ ...i, category }));
      default: return [];
    }
  };

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      {!isPopupOpen && (
        <CategoryGrid
          menuCategories={menuCategories}
          selectedCategory={selectedCategory}
          onCategoryClick={handleCategoryClick}
        />
      )}

      {isPopupOpen && (
        <div className="mb-8">
          <div className="w-full bg-white dark:bg-cosy-gray-800 border border-cosy-gray-200 dark:border-cosy-gray-700 rounded-lg shadow-lg">
          </div>
        </div>
      )}

      {selectedCategory && selectedCategory !== 'Create Your Own' && (
        <CategoryItems
          selectedCategory={selectedCategory}
          menuItemsState={menuItemsState}
          addToOrder={addToOrder}
          decrementMenuItem={decrementMenuItem}
          onCustomizeDeal={(item) => {
            setSelectedDealItem(item);
            setIsCustomizePopupOpen(true);
          }}
          getItemsByCategory={getItemsByCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}

      {isPopupOpen && (
        <CustomizePizzaPopup
          popupCategory={popupCategory}
          onClose={closePopup}
          selectedSize={selectedSize}
          onSelectSize={setSelectedSize}
          selectedBase={selectedBase}
          onSelectBase={setSelectedBase}
          selectedSauce={selectedSauce}
          onSelectSauce={setSelectedSauce}
          selectedToppings={selectedToppings}
          onSelectToppings={setSelectedToppings}
          recentCustomPizzas={recentCustomPizzas}
          onAddToOrder={addToOrder}
          onAddCustomPizza={(customPizza) => {
            addToOrder(customPizza);
            closePopup();
          }}
        />
      )}

      {isCustomizePopupOpen && (
        <DealsPopup
          dealItem={selectedDealItem}
          onClose={() => {
            setIsCustomizePopupOpen(false);
            setSelectedDealItem(null);
          }}
          onAddCustomizedDeal={(item) => {
            addToOrder({
              ...item,
              id: `${item.id}-custom-${Date.now()}`,
              name: `${item.name} (Customized)`
            });
            setIsCustomizePopupOpen(false);
            setSelectedDealItem(null);
          }}
        />
      )}
    </div>
  );
};

export default MainContent;
