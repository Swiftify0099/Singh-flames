
const RecentCustomOrders = ({ orders, onAddAgain }) => (
  <div className="mt-8 pt-6 border-t border-cosy-gray-200 dark:border-cosy-gray-700">
    <h3 className="text-lg font-semibold mb-4 text-cosy-gray-900 dark:text-white">Recent Custom Orders</h3>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {orders.map((order, index) => (
        <div
          key={order.id}
          className="p-4 rounded-cosy border-2 border-cosy-gray-200 dark:border-cosy-gray-700 bg-white dark:bg-cosy-gray-800 hover:scale-105 hover:shadow-cosy-md transition-all cursor-pointer animate-slide-in"
          style={{ animationDelay: `${index * 0.05}s` }}
          onClick={() => onAddAgain(order)}
        >
          <div className="mb-3">
            <h4 className="font-medium text-cosy-gray-900 dark:text-white mb-1">{order.name}</h4>
            <p className="text-xs text-cosy-gray-600 dark:text-cosy-gray-400">
              {order.size} • {order.base}
            </p>
            <p className="text-xs text-cosy-gray-600 dark:text-cosy-gray-400">
              {order.toppings.slice(0, 2).join(', ')}
              {order.toppings.length > 2 && ` +${order.toppings.length - 2}`}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-cosy-orange">${order.price.toFixed(2)}</span>
            <button className="px-3 py-1 bg-cosy-orange text-white rounded-cosy text-xs font-medium hover:bg-cosy-light-orange transition-colors">
              Add Again
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RecentCustomOrders;
