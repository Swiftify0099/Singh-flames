import { CheckCircle, Minus, Plus, X } from 'lucide-react';
import { useState } from 'react';
import { deals, dips, drinks, pizzas, sides, signatures, toppings } from "../data/data.js";
import DealsPopup from './DealsPopup.jsx';
import RecentCustomOrders from './RecentCustomOrders.jsx';

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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {menuCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.name)}
              className={`${category.color} rounded-cosy p-6 cursor-pointer shadow-cosy-sm animate-slide-in-up hover-lift-professional transition-all duration-200 ${selectedCategory === category.name ? 'ring-4 ring-cosy-orange ring-opacity-50 scale-105' : 'hover:opacity-90'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-cosy-gray-700 mb-3">
                <category.icon size={28} />
              </div>
              <h3 className="text-cosy-gray-900 font-semibold text-lg font-display">{category.name}</h3>
              <p className="text-cosy-gray-600 text-sm font-medium">{category.items} Items</p>
            </div>
          ))}
        </div>
      )}

      {isPopupOpen && (
        <div className="mb-8">
          <div className="w-full bg-white dark:bg-cosy-gray-800 border border-cosy-gray-200 dark:border-cosy-gray-700 rounded-lg shadow-lg">
          </div>
        </div>
      )}

      {selectedCategory && selectedCategory !== 'Create Your Own' && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold font-display text-cosy-gray-900 dark:text-white">{selectedCategory}</h2>
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-cosy-gray-600 dark:text-cosy-gray-400 hover:text-cosy-orange transition-colors text-sm font-medium"
            >
              Clear Selection
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {getItemsByCategory(selectedCategory).map((item, index) => {
              const quantity = menuItemsState[item.id] || 0;
              const isSelected = quantity > 0;
              return (
                <div
                  key={item.id}
                  className={`relative p-4 lg:p-5 rounded-cosy transition-all duration-200 cursor-pointer border-2 shadow-md hover:scale-105 animate-slide-in-up ${isSelected ? 'bg-pink-50 dark:bg-pink-100/10 border-pink-300' : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {!isSelected && (
                    <div className="absolute top-0 left-0 h-full w-2 bg-pink-400 rounded-l-cosy"></div>
                  )}
                  <h3 className={`text-base font-semibold mb-1 ${isSelected ? 'text-gray-900 dark:text-white' : 'text-gray-900 dark:text-white'}`}>{item.name}</h3>
                  <p className={`text-lg font-bold mb-4 ${isSelected ? 'text-pink-600 dark:text-pink-400' : 'text-orange-500 dark:text-orange-400'}`}>${item.price.toFixed(2)}</p>
                  <div className="flex items-center justify-between gap-2 pt-2">
                    <button
                      onClick={() => decrementMenuItem(item)}
                      className={`w-8 h-8 rounded-cosy flex items-center justify-center transition-colors ${isSelected ? 'bg-white dark:bg-gray-900 text-pink-600 dark:text-pink-400 hover:bg-pink-100 dark:hover:bg-pink-900/30' : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                    >
                      <Minus size={16} />
                    </button>
                    <span className={`font-semibold ${isSelected ? 'text-gray-900 dark:text-white' : 'text-gray-800 dark:text-white'}`}>{quantity}</span>
                    <button
                      onClick={() => addToOrder(item)}
                      className={`w-8 h-8 rounded-cosy flex items-center justify-center transition-colors ${isSelected ? 'bg-pink-500 hover:bg-pink-400 text-white' : 'bg-orange-500 hover:bg-orange-400 text-white'}`}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  {selectedCategory === 'Deals' && (
                    <button
                      onClick={() => {
                        setSelectedDealItem(item);
                        setIsCustomizePopupOpen(true);
                      }}
                      className="mt-3 w-full bg-cosy-orange hover:bg-cosy-light-orange text-white font-semibold py-2 rounded-cosy transition-colors"
                    >
                      Customize
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {isPopupOpen && (
        <div className="w-full bg-white dark:bg-cosy-gray-800 border border-cosy-gray-200 dark:border-cosy-gray-700 rounded-lg shadow-lg mt-6">
          <div className="bg-white dark:bg-cosy-gray-800 rounded-lg max-w-5xl w-full max-h-[90vh] flex flex-col">
            <div className="flex justify-between items-center p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{popupCategory}</h2>
              <button
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700 dark:text-cosy-gray-400 dark:hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {popupCategory === 'Create Your Own' ? (
                <>
                  {/* Size */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Choose Size</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {pizzas.sizes.map((size) => (
                        <button
                          key={size.id}
                          onClick={() => setSelectedSize(selectedSize?.id === size.id ? null : size)}
                          className={`p-4 rounded-cosy border-2 transition-all relative hover:scale-105 hover:shadow-cosy-md ${selectedSize?.id === size.id ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-cosy-gray-200 dark:border-cosy-gray-700 hover:border-green-300'}`}
                        >
                          {selectedSize?.id === size.id && (
                            <div className="absolute top-2 right-2 text-green-600 dark:text-green-400 animate-scale-in">
                              <CheckCircle size={20} />
                            </div>
                          )}
                          <h4 className="font-medium text-gray-900 dark:text-white">{size.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">${size.price.toFixed(2)}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Base */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Choose Base</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      {pizzas.bases.map((base) => (
                        <button
                          key={base.id}
                          onClick={() => setSelectedBase(selectedBase?.id === base.id ? null : base)}
                          className={`p-4 rounded-cosy border-2 transition-all relative hover:scale-105 hover:shadow-cosy-md ${selectedBase?.id === base.id ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-cosy-gray-200 dark:border-cosy-gray-700 hover:border-green-300'}`}
                        >
                          {selectedBase?.id === base.id && (
                            <div className="absolute top-2 right-2 text-green-600 dark:text-green-400 animate-scale-in">
                              <CheckCircle size={20} />
                            </div>
                          )}
                          <h4 className="font-medium text-gray-900 dark:text-white">{base.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">${base.price.toFixed(2)}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sauce */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Choose Sauce</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      {pizzas.sauces.map((sauce) => (
                        <button
                          key={sauce.id}
                          onClick={() => setSelectedSauce(selectedSauce?.id === sauce.id ? null : sauce)}
                          className={`p-4 rounded-cosy border-2 transition-all relative hover:scale-105 hover:shadow-cosy-md ${selectedSauce?.id === sauce.id ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : 'border-cosy-gray-200 dark:border-cosy-gray-700 hover:border-green-300'}`}
                        >
                          {selectedSauce?.id === sauce.id && (
                            <div className="absolute top-2 right-2 text-green-600 dark:text-green-400 animate-scale-in">
                              <CheckCircle size={20} />
                            </div>
                          )}
                          <h4 className="font-medium text-gray-900 dark:text-white">{sauce.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">${sauce.price.toFixed(2)}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Toppings */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Choose Toppings</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {toppings.map((topping) => (
                        <button
                          key={topping.id}
                          onClick={() => {
                            setSelectedToppings(prev =>
                              prev.includes(topping.id)
                                ? prev.filter(id => id !== topping.id)
                                : [...prev, topping.id]
                            );
                          }}
                          className={`p-4 rounded-cosy border-2 transition-all relative hover:scale-105 hover:shadow-cosy-md ${selectedToppings.includes(topping.id)
                            ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                            : 'border-cosy-gray-200 dark:border-cosy-gray-700 hover:border-green-300'}`}
                        >
                          {selectedToppings.includes(topping.id) && (
                            <div className="absolute top-2 right-2 text-green-600 dark:text-green-400 animate-scale-in">
                              <CheckCircle size={20} />
                            </div>
                          )}
                          <h4 className="font-medium text-gray-900 dark:text-white">{topping.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">${topping.price.toFixed(2)}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <RecentCustomOrders orders={recentCustomPizzas} onAddAgain={addToOrder} />
                </>
              ) : null}
            </div>

            {popupCategory === 'Create Your Own' && (
              <div className="p-6 border-t border-cosy-gray-200 dark:border-cosy-gray-700 bg-white dark:bg-cosy-gray-800">
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      let totalPrice = selectedSize?.price || 0;
                      totalPrice += selectedBase?.price || 0;
                      totalPrice += selectedSauce?.price || 0;
                      totalPrice += selectedToppings.reduce((sum, toppingId) => {
                        const topping = toppings.find(t => t.id === toppingId);
                        return sum + (topping?.price || 0);
                      }, 0);
                      const customPizza = {
                        id: `custom-${Date.now()}`,
                        name: 'Custom Pizza',
                        price: totalPrice,
                        category: 'Create Your Own'
                      };
                      addToOrder(customPizza);
                      closePopup();
                    }}
                    className="bg-cosy-orange hover:bg-cosy-light-orange text-white px-6 py-3 rounded-cosy font-semibold transition-colors"
                  >
                    Add to Order
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
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
