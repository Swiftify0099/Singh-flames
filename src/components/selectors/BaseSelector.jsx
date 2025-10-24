import { CheckCircle } from 'lucide-react';

const BaseSelector = ({ bases, selectedBase, onSelectBase }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Choose Base</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {bases.map((base) => (
          <button
            key={base.id}
            onClick={() => onSelectBase(selectedBase?.id === base.id ? null : base)}
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
  );
};

export default BaseSelector;
