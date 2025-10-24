import { CheckCircle, X } from "lucide-react";
import { useState } from "react";
import { dips, drinks } from "../../utils/data.js";

const DealsPopup = ({
  dealItem,
  onClose,
  onAddCustomizedDeal
}) => {
  const [selectedDrink, setSelectedDrink] = useState(null);
  const [selectedDip, setSelectedDip] = useState(null);

  if (!dealItem) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-cosy-gray-800 rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto relative p-6 animate-fade-in">

        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Customize: {dealItem.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-cosy-gray-400 dark:hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Drinks */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Choose Drink</h3>
            <div className="grid grid-cols-2 gap-3">
              {drinks.slice(0, 4).map((drink) => (
                <button
                  key={drink.id}
                  onClick={() => setSelectedDrink(selectedDrink?.id === drink.id ? null : drink)}
                  className={`p-3 rounded-cosy border-2 transition-all relative hover:scale-105 hover:shadow-cosy-md ${
                    selectedDrink?.id === drink.id
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-cosy-gray-200 dark:border-cosy-gray-700 hover:border-green-300'
                  }`}
                >
                  {selectedDrink?.id === drink.id && (
                    <div className="absolute top-2 right-2 text-green-600 dark:text-green-400 animate-scale-in">
                      <CheckCircle size={20} />
                    </div>
                  )}
                  <h4 className="font-medium text-gray-900 dark:text-white">{drink.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">${drink.price.toFixed(2)}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Dips */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Add a Dip</h3>
            <div className="grid grid-cols-3 gap-3">
              {dips.slice(0, 6).map((dip) => (
                <button
                  key={dip.id}
                  onClick={() => setSelectedDip(selectedDip?.id === dip.id ? null : dip)}
                  className={`p-3 rounded-cosy border-2 transition-all relative hover:scale-105 hover:shadow-cosy-md ${
                    selectedDip?.id === dip.id
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                      : 'border-cosy-gray-200 dark:border-cosy-gray-700 hover:border-green-300'
                  }`}
                >
                  {selectedDip?.id === dip.id && (
                    <div className="absolute top-2 right-2 text-green-600 dark:text-green-400 animate-scale-in">
                      <CheckCircle size={20} />
                    </div>
                  )}
                  <h4 className="font-medium text-gray-900 dark:text-white">{dip.name}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">${dip.price.toFixed(2)}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => {
              let customizedItem = { ...dealItem };
              let totalPrice = dealItem.price;

              // Build customized name
              let customizations = [];
              if (selectedDrink) {
                customizations.push(selectedDrink.name);
                totalPrice += selectedDrink.price;
              }
              if (selectedDip) {
                customizations.push(selectedDip.name);
                totalPrice += selectedDip.price;
              }

              if (customizations.length > 0) {
                customizedItem.name = `${dealItem.name} (${customizations.join(', ')})`;
              }

              customizedItem.price = totalPrice;
              customizedItem.id = `${dealItem.id}-custom-${Date.now()}`;

              onAddCustomizedDeal(customizedItem);
              onClose();
            }}
            className="bg-cosy-orange hover:bg-cosy-light-orange text-white px-6 py-3 rounded-cosy font-semibold transition-colors"
          >
            Add Customized Deal
          </button>
        </div>
      </div>
    </div>
  );
};

export default DealsPopup;
