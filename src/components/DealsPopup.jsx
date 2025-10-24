import { X } from "lucide-react";
import { dips, drinks } from "../utils/data.js";

const DealsPopup = ({
  dealItem,
  onClose,
  onAddCustomizedDeal
}) => {
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
                  className="p-3 rounded-cosy border border-cosy-gray-200 dark:border-cosy-gray-700 hover:border-cosy-orange transition"
                >
                  {drink.name}
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
                  className="p-3 rounded-cosy border border-cosy-gray-200 dark:border-cosy-gray-700 hover:border-cosy-orange transition"
                >
                  {dip.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => onAddCustomizedDeal(dealItem)}
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
