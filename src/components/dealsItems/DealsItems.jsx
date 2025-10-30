import { Minus, Plus } from "lucide-react";

const DealsItems = ({
  menuItemsState,
  addToOrder,
  decrementMenuItem,
  onCustomizeDeal,
  getItemsByCategory,
  setSelectedCategory,
}) => {
  const deals = getItemsByCategory("Deals");

  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-display text-cosy-gray-900 dark:text-white">
          Deals
        </h2>
        <button
          onClick={() => setSelectedCategory(null)}
          className="text-cosy-gray-600 dark:text-cosy-gray-400 hover:text-cosy-orange transition-colors text-sm font-medium"
        >
          Clear Selection
        </button>
      </div>

      {/* Grid layout (same as Signature page) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((item, index) => {
          const quantity = menuItemsState[item.id] || 0;
          const isSelected = quantity > 0;

          return (
            <div
              key={item.id}
              className={`relative p-5 rounded-cosy transition-all duration-200 border-2 shadow-md hover:scale-[1.02] animate-slide-in-up ${
                isSelected
                  ? "bg-pink-50 dark:bg-pink-100/10 border-pink-300"
                  : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Accent Line */}
              {!isSelected && (
                <div className="absolute top-0 left-0 h-full w-2 bg-pink-400 rounded-l-cosy"></div>
              )}

              {/* Deal Info */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.name}
              </h3>
              <p className="text-lg font-bold text-orange-500 dark:text-orange-400 mb-4">
                ${item.price.toFixed(2)}
              </p>

              {/* Quantity Controls + Customize Button */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => decrementMenuItem(item)}
                    className={`w-8 h-8 rounded-cosy flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-white dark:bg-gray-900 text-pink-600 dark:text-pink-400 hover:bg-pink-100 dark:hover:bg-pink-900/30"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    <Minus size={16} />
                  </button>

                  <span
                    className={`font-semibold ${
                      isSelected
                        ? "text-gray-900 dark:text-white"
                        : "text-gray-800 dark:text-white"
                    }`}
                  >
                    {quantity}
                  </span>

                  <button
                    onClick={() => addToOrder(item)}
                    className={`w-8 h-8 rounded-cosy flex items-center justify-center transition-colors ${
                      isSelected
                        ? "bg-pink-500 hover:bg-pink-400 text-white"
                        : "bg-orange-500 hover:bg-orange-400 text-white"
                    }`}
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <button
                  onClick={() => onCustomizeDeal(item)}
                  className="ml-3 bg-cosy-orange hover:bg-cosy-light-orange text-white font-semibold px-4 py-2 rounded-cosy transition-colors"
                >
                  Customize
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DealsItems;
