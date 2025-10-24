import { CheckCircle } from 'lucide-react';

const SauceSelector = ({ sauces, selectedSauce, onSelectSauce }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Choose Sauce</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {sauces.map((sauce) => (
          <button
            key={sauce.id}
            onClick={() => onSelectSauce(selectedSauce?.id === sauce.id ? null : sauce)}
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
  );
};

export default SauceSelector;
