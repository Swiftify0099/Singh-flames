import React, { useState } from 'react';
import { Search, Plus, Minus, X } from 'lucide-react';
import { pizzas, toppings, portions } from '../data/data';

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
  const [selectedPortion, setSelectedPortion] = useState(null);

  const handleCategoryClick = (categoryName) => {
    setPopupCategory(categoryName);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupCategory(null);
    setSelectedSize(null);
    setSelectedBase(null);
    setSelectedSauce(null);
    setSelectedToppings([]);
    setSelectedPortion(null);
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      {!isPopupOpen && (
        <>
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search"
                className="w-full max-w-md bg-gray-800 dark:bg-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm text-white dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {menuCategories.map((category, index) => (
              <div
                key={index}
                onClick={() => handleCategoryClick(category.name)}
                className={`${category.color} rounded-lg p-4 cursor-pointer hover:opacity-90 transition-all hover:scale-105 ${category.name === 'Create Your Own' ? 'animate-slide-in' : ''}`}
                style={category.name === 'Create Your Own' ? { animationDelay: '0s' } : {}}
              >
                <div className="text-gray-700 mb-2">
                  <category.icon size={24} />
                </div>
                <h3 className="text-gray-900 font-semibold text-lg">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.items} Items</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Menu Items Grid */}
      {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {menuItems.map((item, index) => {
          const quantity = menuItemsState[item.id] || 0;
          const isHighlighted = quantity > 0;

          return (
            <div
              key={item.id}
              className={`${isHighlighted ? 'bg-pink-200' : 'bg-gray-800 dark:bg-gray-800'} rounded-lg p-4 relative transition-all hover:scale-105 animate-slide-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-xs text-gray-500 dark:text-gray-500 mb-1 flex items-center gap-1">
                <span>Orders</span>
                <span>→</span>
                <span>Kitchen</span>
              </div>
              <h3 className={`${isHighlighted ? 'text-gray-900' : 'text-white dark:text-white'} font-medium mb-1`}>
                {item.name}
              </h3>
              <p className={`${isHighlighted ? 'text-gray-700' : 'text-gray-400 dark:text-gray-400'} text-sm mb-3`}>
                ${item.price.toFixed(2)}
              </p>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => decrementMenuItem(item)}
                  className={`${isHighlighted ? 'border-pink-400 hover:bg-pink-300' : 'border-gray-600 hover:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-700'} border rounded p-1 transition-colors`}
                >
                  <Minus size={16} />
                </button>
                <span className={`${isHighlighted ? 'text-gray-900' : 'text-white dark:text-white'} w-8 text-center font-semibold`}>
                  {quantity}
                </span>
                <button
                  onClick={() => addToOrder(item)}
                  className={`${isHighlighted ? 'bg-pink-400 border-pink-400 hover:bg-pink-500' : 'border-gray-600 hover:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-700'} border rounded p-1 transition-colors`}
                >
                  <Plus size={6} />
                </button>
              </div>
            </div>
          );
        })}
      </div> */}

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="relative inset-0 bg-black bg-opacity-10 right-20 flex items-end  z-80 ">
          <div className="bg-white dark:bg-gray-800 w-full max-w-4xl max-h-auto overflow-y-auto rounded-t-lg shadow-lg transform transition-transform duration-300 ease-out translate-y-0 animate-slide-up">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{popupCategory}</h2>
                <button onClick={closePopup} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                  <X size={24} />
                </button>
              </div>

              {popupCategory === 'Create Your Own' ? (
                <>
                  {/* Size Selection */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Choose Size</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      {pizzas.sizes.map((size) => (
                        <button
                          key={size.id}
                          onClick={() => setSelectedSize(size)}
                          className={`p-4 rounded-lg border-2 transition-colors ${
                            selectedSize?.id === size.id
                              ? 'border-purple-500 bg-purple-100 dark:bg-purple-900'
                              : 'border-gray-300 dark:border-gray-600 hover:border-purple-300'
                          }`}
                        >
                          <h4 className="font-medium text-gray-900 dark:text-white">{size.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">${size.price.toFixed(2)}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Base Selection */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Choose Base</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      {pizzas.bases.map((base) => (
                        <button
                          key={base.id}
                          onClick={() => setSelectedBase(base)}
                          className={`p-4 rounded-lg border-2 transition-colors ${
                            selectedBase?.id === base.id
                              ? 'border-purple-500 bg-purple-100 dark:bg-purple-900'
                              : 'border-gray-300 dark:border-gray-600 hover:border-purple-300'
                          }`}
                        >
                          <h4 className="font-medium text-gray-900 dark:text-white">{base.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">${base.price.toFixed(2)}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Sauce Selection */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Choose Sauce</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      {pizzas.sauces.map((sauce) => (
                        <button
                          key={sauce.id}
                          onClick={() => setSelectedSauce(sauce)}
                          className={`p-4 rounded-lg border-2 transition-colors ${
                            selectedSauce?.id === sauce.id
                              ? 'border-purple-500 bg-purple-100 dark:bg-purple-900'
                              : 'border-gray-300 dark:border-gray-600 hover:border-purple-300'
                          }`}
                        >
                          <h4 className="font-medium text-gray-900 dark:text-white">{sauce.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">${sauce.price.toFixed(2)}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Toppings Selection */}
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
                          className={`p-4 rounded-lg border-2 transition-colors ${
                            selectedToppings.includes(topping.id)
                              ? 'border-purple-500 bg-purple-100 dark:bg-purple-900'
                              : 'border-gray-300 dark:border-gray-600 hover:border-purple-300'
                          }`}
                        >
                          <h4 className="font-medium text-gray-900 dark:text-white">{topping.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">${topping.price.toFixed(2)}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Portion Selection */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Choose Portion</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      {portions.map((portion) => (
                        <button
                          key={portion.id}
                          onClick={() => setSelectedPortion(portion)}
                          className={`p-4 rounded-lg border-2 transition-colors ${
                            selectedPortion?.id === portion.id
                              ? 'border-purple-500 bg-purple-100 dark:bg-purple-900'
                              : 'border-gray-300 dark:border-gray-600 hover:border-purple-300'
                          }`}
                        >
                          <h4 className="font-medium text-gray-900 dark:text-white">{portion.name}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{portion.multiplier}x</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Add to Order Button */}
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        // Calculate total price and add to order
                        let totalPrice = selectedSize?.price || 0;
                        totalPrice += selectedBase?.price || 0;
                        totalPrice += selectedSauce?.price || 0;
                        totalPrice += selectedToppings.reduce((sum, toppingId) => {
                          const topping = toppings.find(t => t.id === toppingId);
                          return sum + (topping?.price || 0);
                        }, 0);
                        totalPrice *= selectedPortion?.multiplier || 1;

                        const customPizza = {
                          id: `custom-${Date.now()}`,
                          name: 'Custom Pizza',
                          price: totalPrice,
                          category: 'Create Your Own'
                        };
                        addToOrder(customPizza);
                        closePopup();
                      }}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Add to Order
                    </button>
                  </div>
                </>
              ) : (
                /* Menu Items Grid for other categories */
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {menuItems.filter(item => item.category === popupCategory).map((item, index) => {
                    const quantity = menuItemsState[item.id] || 0;
                    const isHighlighted = quantity > 0;

                    return (
                      <div
                        key={item.id}
                        className={`${isHighlighted ? 'bg-pink-200' : 'bg-gray-800 dark:bg-gray-800'} rounded-lg p-4 relative transition-all hover:scale-105 animate-slide-in`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="text-xs text-gray-500 dark:text-gray-500 mb-1 flex items-center gap-1">
                          <span>Orders</span>
                          <span>→</span>
                          <span>Kitchen</span>
                        </div>
                        <h3 className={`${isHighlighted ? 'text-gray-900' : 'text-white dark:text-white'} font-medium mb-1`}>
                          {item.name}
                        </h3>
                        <p className={`${isHighlighted ? 'text-gray-700' : 'text-gray-400 dark:text-gray-400'} text-sm mb-3`}>
                          ${item.price.toFixed(2)}
                        </p>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => decrementMenuItem(item)}
                            className={`${isHighlighted ? 'border-pink-400 hover:bg-pink-300' : 'border-gray-600 hover:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-700'} border rounded p-1 transition-colors`}
                          >
                            <Minus size={16} />
                          </button>
                          <span className={`${isHighlighted ? 'text-gray-900' : 'text-white dark:text-white'} w-8 text-center font-semibold`}>
                            {quantity}
                          </span>
                          <button
                            onClick={() => addToOrder(item)}
                            className={`${isHighlighted ? 'bg-pink-400 border-pink-400 hover:bg-pink-500' : 'border-gray-600 hover:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-700'} border rounded p-1 transition-colors`}
                          >
                            <Plus size={6} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainContent;
