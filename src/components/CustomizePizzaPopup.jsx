import { X } from 'lucide-react';
import { pizzas, toppings } from "../utils/data.js";
import BaseSelector from './BaseSelector.jsx';
import RecentCustomOrders from './RecentCustomOrders.jsx';
import SauceSelector from './SauceSelector.jsx';
import SizeSelector from './SizeSelector.jsx';
import ToppingsSelector from './ToppingsSelector.jsx';

const CustomizePizzaPopup = ({
  popupCategory,
  onClose,
  selectedSize,
  onSelectSize,
  selectedBase,
  onSelectBase,
  selectedSauce,
  onSelectSauce,
  selectedToppings,
  onSelectToppings,
  recentCustomPizzas,
  onAddToOrder,
  onAddCustomPizza
}) => {
  return (
    <div className="w-full bg-white dark:bg-cosy-gray-800 border border-cosy-gray-200 dark:border-cosy-gray-700 rounded-lg shadow-lg mt-6">
      <div className="bg-white dark:bg-cosy-gray-800 rounded-lg max-w-5xl w-full max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{popupCategory}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-cosy-gray-400 dark:hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {popupCategory === 'Create Your Own' ? (
            <>
              <SizeSelector
                sizes={pizzas.sizes}
                selectedSize={selectedSize}
                onSelectSize={onSelectSize}
              />
              <BaseSelector
                bases={pizzas.bases}
                selectedBase={selectedBase}
                onSelectBase={onSelectBase}
              />
              <SauceSelector
                sauces={pizzas.sauces}
                selectedSauce={selectedSauce}
                onSelectSauce={onSelectSauce}
              />
              <ToppingsSelector
                toppings={toppings}
                selectedToppings={selectedToppings}
                onSelectToppings={onSelectToppings}
              />
              <RecentCustomOrders orders={recentCustomPizzas} onAddAgain={onAddToOrder} />
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
                  onAddCustomPizza(customPizza);
                  onClose();
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
  );
};

export default CustomizePizzaPopup;
