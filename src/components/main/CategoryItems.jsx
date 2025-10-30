
import { Minus, Plus } from 'lucide-react';
import DealsItems from "../dealsItems/DealsItems";
import SignatureItems from "../SignatureItems/SignatureItems";

const CategoryItems = ({
  selectedCategory,
  menuItemsState,
  addToOrder,
  decrementMenuItem,
  onCustomizeDeal,
  getItemsByCategory,
  setSelectedCategory,
}) => {

  // Separate rendering for Signatures
  if (selectedCategory === 'Signatures') {
    return (
      <SignatureItems
        menuItemsState={menuItemsState}
        addToOrder={addToOrder}
        getItemsByCategory={getItemsByCategory}
        setSelectedCategory={setSelectedCategory}
      />
    );
  }

  // Separate rendering for Deals
  if (selectedCategory === 'Deals') {
    return (
      <DealsItems
        menuItemsState={menuItemsState}
        addToOrder={addToOrder}
        decrementMenuItem={decrementMenuItem}
        onCustomizeDeal={onCustomizeDeal}
        getItemsByCategory={getItemsByCategory}
        setSelectedCategory={setSelectedCategory}
      />
    );
  }

  // Default layout for all other categories
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-display text-cosy-gray-900 dark:text-white">
          {selectedCategory}
        </h2>
        <button
          onClick={() => setSelectedCategory(null)}
          className="text-cosy-gray-600 dark:text-cosy-gray-400 hover:text-cosy-orange transition-colors text-sm font-medium"
        >
          Clear Selection
        </button>
      </div>

      {/* Grid layout for normal categories */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {getItemsByCategory(selectedCategory).map((item, index) => {
          const quantity = menuItemsState[item.id] || 0;
          const isSelected = quantity > 0;

          return (
            <div
              key={item.id}
              className={`relative p-4 lg:p-5 rounded-cosy transition-all duration-200 cursor-pointer border-2 shadow-md hover:scale-[1.01] animate-slide-in-up ${
                isSelected
                  ? 'bg-pink-50 dark:bg-pink-100/10 border-pink-300'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {!isSelected && (
                <div className="absolute top-0 left-0 h-full w-2 bg-pink-400 rounded-l-cosy"></div>
              )}

              {/* Normal Item Info */}
              <h3 className="text-base font-semibold mb-1 text-gray-900 dark:text-white">
                {item.name}
              </h3>
              <p className="text-lg font-bold mb-4 text-orange-500 dark:text-orange-400">
                ${item.price.toFixed(2)}
              </p>

              {/* Quantity Controls */}
              <div className="flex items-center justify-between gap-2 pt-2">
                <button
                  onClick={() => decrementMenuItem(item)}
                  className="w-8 h-8 rounded-cosy flex items-center justify-center transition-colors bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                >
                  <Minus size={16} />
                </button>
                <span className="font-semibold text-gray-800 dark:text-white">
                  {quantity}
                </span>
                <button
                  onClick={() => addToOrder(item)}
                  className="w-8 h-8 rounded-cosy flex items-center justify-center transition-colors bg-orange-500 hover:bg-orange-400 text-white"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryItems;
