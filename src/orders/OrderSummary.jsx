import { Check, Edit2, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useState } from 'react';

const OrderSummary = ({
  selectedTable,
  orderItems,
  updateOrderQuantity,
  removeItem,
  subtotal,
  tax,
  total,
  paymentMethod,
  setPaymentMethod,
  placeOrder
}) => {
  const [swipeOffset, setSwipeOffset] = useState({});
  const [startX, setStartX] = useState({});
  const [isSwiping, setIsSwiping] = useState({});

  const handleStart = (e, itemId) => {
    setIsSwiping(prev => ({ ...prev, [itemId]: true }));
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setStartX(prev => ({ ...prev, [itemId]: clientX }));
  };

  const handleMove = (e, itemId) => {
    const start = startX[itemId];
    if (!start) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - start; // Positive for right swipe
    if (deltaX > 0) { // Only allow right swipe
      setSwipeOffset(prev => ({ ...prev, [itemId]: Math.min(deltaX, 60) }));
    }
  };

  const handleEnd = (e, itemId) => {
    setIsSwiping(prev => ({ ...prev, [itemId]: false }));
    const currentOffset = swipeOffset[itemId] || 0;
    if (currentOffset > 30) { // Threshold to reveal delete
      setSwipeOffset(prev => ({ ...prev, [itemId]: 60 }));
    } else {
      setSwipeOffset(prev => ({ ...prev, [itemId]: 0 }));
    }
  };
  return (
    <div className="w-80 bg-cosy-gray-50 dark:bg-cosy-gray-900 p-6 flex flex-col flex-shrink-0 shadow-cosy-lg rounded-cosy">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-display font-bold text-cosy-gray-900 dark:text-white">Table {selectedTable.number}</h2>
          <p className="text-sm text-cosy-gray-600 dark:text-cosy-gray-400">{selectedTable.customer}</p>
        </div>
        <button className="p-2 hover:bg-cosy-gray-200 dark:hover:bg-cosy-gray-700 rounded-cosy transition-colors">
          <Edit2 size={20} className="text-cosy-gray-600 dark:text-cosy-gray-400" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto mb-6">
        {orderItems.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <ShoppingBag size={48} className="mx-auto mb-3 opacity-50" />
            <p>No items in order</p>
            <p className="text-sm mt-1">Add items from menu</p>
          </div>
        ) : (
          orderItems.map((item, index) => {
            const offset = swipeOffset[item.id] || 0;
            return (
              <div key={item.id} className="relative mb-4 pb-4 border-b border-cosy-gray-200 dark:border-cosy-gray-700">
                <div
                  className="flex items-start justify-between transition-transform duration-200 ease-out"
                  style={{ transform: `translateX(${offset}px)` }}
                  onMouseDown={(e) => handleStart(e, item.id)}
                  onMouseMove={(e) => isSwiping[item.id] && handleMove(e, item.id)}
                  onMouseUp={(e) => handleEnd(e, item.id)}
                  onMouseLeave={(e) => handleEnd(e, item.id)}
                  onTouchStart={(e) => handleStart(e, item.id)}
                  onTouchMove={(e) => handleMove(e, item.id)}
                  onTouchEnd={(e) => handleEnd(e, item.id)}
                >
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-6 h-6 rounded-full bg-cosy-orange flex items-center justify-center text-xs text-white font-semibold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-cosy-gray-900 dark:text-white">{item.name}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateOrderQuantity(item.id, -1)}
                          className="w-6 h-6 bg-cosy-gray-200 dark:bg-cosy-gray-700 rounded-cosy flex items-center justify-center hover:bg-cosy-gray-300 dark:hover:bg-cosy-gray-600 transition-colors"
                        >
                          <Minus size={14} className="text-cosy-gray-600 dark:text-cosy-gray-400" />
                        </button>
                        <span className="text-sm text-cosy-gray-600 dark:text-cosy-gray-400 w-8 text-center font-medium">x{item.quantity}</span>
                        <button
                          onClick={() => updateOrderQuantity(item.id, 1)}
                          className="w-6 h-6 bg-cosy-gray-200 dark:bg-cosy-gray-700 rounded-cosy flex items-center justify-center hover:bg-cosy-gray-300 dark:hover:bg-cosy-gray-600 transition-colors"
                        >
                          <Plus size={14} className="text-cosy-gray-600 dark:text-cosy-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-cosy-gray-900 dark:text-white">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
                <div
                  className={`absolute left-0 top-0 h-full flex items-center justify-center rounded-cosy transition-opacity duration-200 ${
                    offset > 30 ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ width: '60px' }}
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 size={16} className="text-red-500" />
                </div>
              </div>
            );
          })
        )}
      </div>

      <div className="border-t border-cosy-gray-200 dark:border-cosy-gray-700 pt-4 mb-4">
        <div className="flex justify-between mb-2 text-sm">
          <span className="text-cosy-gray-600 dark:text-cosy-gray-400 font-medium">Subtotal</span>
          <span className="text-cosy-gray-900 dark:text-white font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4 text-sm">
          <span className="text-cosy-gray-600 dark:text-cosy-gray-400 font-medium">Tax 10%</span>
          <span className="text-cosy-gray-900 dark:text-white font-semibold">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xl font-display font-bold">
          <span className="text-cosy-gray-900 dark:text-white">Total</span>
          <span className="text-cosy-orange">${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-cosy-gray-600 dark:text-cosy-gray-400 mb-3 font-medium">Payment Method</p>
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => setPaymentMethod('Cash')}
            className={`p-3 rounded-cosy flex flex-col items-center gap-2 transition-all shadow-cosy-sm relative ${
              paymentMethod === 'Cash' ? 'bg-cosy-orange text-white scale-105 shadow-cosy-md' : 'bg-cosy-gray-50 dark:bg-cosy-gray-800 hover:bg-cosy-gray-100 dark:hover:bg-cosy-gray-700 hover:shadow-cosy-md'
            }`}
          >
            {paymentMethod === 'Cash' && (
              <div className="absolute top-1 right-1 text-white animate-scale-in">
                <Check size={16} />
              </div>
            )}
            <div className={`w-8 h-8 rounded-full ${paymentMethod === 'Cash' ? 'bg-white' : 'bg-cosy-gray-200 dark:bg-cosy-gray-600'} flex items-center justify-center`}>
              <span className={`${paymentMethod === 'Cash' ? 'text-cosy-orange' : 'text-cosy-gray-600 dark:text-cosy-gray-400'} text-lg font-bold`}>$</span>
            </div>
            <span className="text-xs font-medium">Cash</span>
          </button>
          <button
            onClick={() => setPaymentMethod('Debit Card')}
            className={`p-3 rounded-cosy flex flex-col items-center gap-2 transition-all shadow-cosy-sm relative ${
              paymentMethod === 'Debit Card' ? 'bg-cosy-orange text-white scale-105 shadow-cosy-md' : 'bg-cosy-gray-50 dark:bg-cosy-gray-800 hover:bg-cosy-gray-100 dark:hover:bg-cosy-gray-700 hover:shadow-cosy-md'
            }`}
          >
            {paymentMethod === 'Debit Card' && (
              <div className="absolute top-1 right-1 text-white animate-scale-in">
                <Check size={16} />
              </div>
            )}
            <div className={`w-8 h-8 rounded-full ${paymentMethod === 'Debit Card' ? 'bg-white' : 'bg-cosy-gray-200 dark:bg-cosy-gray-600'} flex items-center justify-center`}>
              <span className={`${paymentMethod === 'Debit Card' ? 'text-cosy-orange' : 'text-cosy-gray-600 dark:text-cosy-gray-400'} text-lg`}>═</span>
            </div>
            <span className="text-xs font-medium">Debit Card</span>
          </button>
          <button
            onClick={() => setPaymentMethod('E-Wallet')}
            className={`p-3 rounded-cosy flex flex-col items-center gap-2 transition-all shadow-cosy-sm relative ${
              paymentMethod === 'E-Wallet' ? 'bg-cosy-orange text-white scale-105 shadow-cosy-md' : 'bg-cosy-gray-50 dark:bg-cosy-gray-800 hover:bg-cosy-gray-100 dark:hover:bg-cosy-gray-700 hover:shadow-cosy-md'
            }`}
          >
            {paymentMethod === 'E-Wallet' && (
              <div className="absolute top-1 right-1 text-white animate-scale-in">
                <Check size={16} />
              </div>
            )}
            <div className={`w-8 h-8 rounded-full ${paymentMethod === 'E-Wallet' ? 'bg-white' : 'bg-cosy-gray-200 dark:bg-cosy-gray-600'} flex items-center justify-center`}>
              <span className={`${paymentMethod === 'E-Wallet' ? 'text-cosy-orange' : 'text-cosy-gray-600 dark:text-cosy-gray-400'} text-lg`}>⊞</span>
            </div>
            <span className="text-xs font-medium">E-Wallet</span>
          </button>
        </div>
      </div>

      <button
        onClick={placeOrder}
        disabled={orderItems.length === 0}
        className={`w-full py-4 rounded-cosy font-semibold font-display transition-all shadow-cosy-sm ${
          orderItems.length === 0
            ? 'bg-cosy-gray-300 text-cosy-gray-500 cursor-not-allowed'
            : 'bg-cosy-orange text-white hover:bg-cosy-orange-hover hover:shadow-cosy-md hover:scale-105'
        }`}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
