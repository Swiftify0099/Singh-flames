import React from 'react';
import { Edit2, ShoppingBag, Minus, Plus, Trash2 } from 'lucide-react';

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
  return (
    <div className="w-75 bg-gray-800 dark:bg-gray-900 p-6 flex flex-col flex-shrink-0">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">Table {selectedTable.number}</h2>
          <p className="text-sm text-gray-400">{selectedTable.customer}</p>
        </div>
        <button className="p-2 hover:bg-gray-700 rounded transition-colors">
          <Edit2 size={20} />
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
          orderItems.map((item, index) => (
            <div key={item.id} className="flex items-start justify-between mb-4 pb-4 border-b border-gray-700">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center text-xs flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => updateOrderQuantity(item.id, -1)}
                      className="w-5 h-5 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="text-sm text-gray-400 w-8 text-center">x{item.quantity}</span>
                    <button
                      onClick={() => updateOrderQuantity(item.id, 1)}
                      className="w-5 h-5 bg-gray-700 rounded flex items-center justify-center hover:bg-gray-600 transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                <button
                  className="p-1 hover:bg-gray-700 rounded transition-colors"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 size={16} className="text-red-500" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="border-t border-gray-700 pt-4 mb-4">
        <div className="flex justify-between mb-2 text-sm">
          <span className="text-gray-400">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-4 text-sm">
          <span className="text-gray-400">Tax 10%</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-400 mb-3">Payment Method</p>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setPaymentMethod('Cash')}
            className={`p-3 rounded-lg flex flex-col items-center gap-2 transition-all ${
              paymentMethod === 'Cash' ? 'bg-white text-gray-900 scale-105' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            <div className={`w-8 h-8 rounded-full ${paymentMethod === 'Cash' ? 'bg-gray-900' : 'bg-gray-800'} flex items-center justify-center`}>
              <span className="text-white text-lg font-bold">$</span>
            </div>
            <span className="text-xs font-medium">Cash</span>
          </button>
          <button
            onClick={() => setPaymentMethod('Debit Card')}
            className={`p-3 rounded-lg flex flex-col items-center gap-2 transition-all ${
              paymentMethod === 'Debit Card' ? 'bg-white text-gray-900 scale-105' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            <div className={`w-8 h-8 rounded-full ${paymentMethod === 'Debit Card' ? 'bg-gray-900' : 'bg-gray-800'} flex items-center justify-center`}>
              <span className="text-white text-lg">═</span>
            </div>
            <span className="text-xs font-medium">Debit Card</span>
          </button>
          <button
            onClick={() => setPaymentMethod('E-Wallet')}
            className={`p-3 rounded-lg flex flex-col items-center gap-2 transition-all ${
              paymentMethod === 'E-Wallet' ? 'bg-white text-gray-900 scale-105' : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            <div className={`w-8 h-8 rounded-full ${paymentMethod === 'E-Wallet' ? 'bg-gray-900' : 'bg-gray-800'} flex items-center justify-center`}>
              <span className="text-white text-lg">⊞</span>
            </div>
            <span className="text-xs font-medium">E-Wallet</span>
          </button>
        </div>
      </div>

      <button
        onClick={placeOrder}
        disabled={orderItems.length === 0}
        className={`w-full py-4 rounded-lg font-semibold transition-all ${
          orderItems.length === 0
            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
            : 'bg-white text-gray-900 hover:bg-gray-100 hover:scale-105'
        }`}
      >
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
