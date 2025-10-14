import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderItems: [
    { id: 1, name: 'New Order', quantity: 2, price: 25.50 },
    { id: 2, name: 'Orders', quantity: 3, price: 36.90 },
    { id: 3, name: 'Invoices', quantity: 1, price: 5.60 },
    { id: 4, name: 'Order Screen', quantity: 1, price: 5.60 },
    { id: 5, name: 'Order Notifications', quantity: 1, price: 4.20 }
  ],
  menuItemsState: {},
  selectedTable: { number: 5, customer: 'Leslie K.' },
  paymentMethod: 'E-Wallet',
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      const menuItem = action.payload;
      const existingItem = state.orderItems.find(item => item.name === menuItem.name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.orderItems.push({
          id: Date.now(),
          name: menuItem.name,
          quantity: 1,
          price: menuItem.price
        });
      }

      state.menuItemsState[menuItem.id] = (state.menuItemsState[menuItem.id] || 0) + 1;
    },
    decrementMenuItem: (state, action) => {
      const menuItem = action.payload;
      if ((state.menuItemsState[menuItem.id] || 0) > 0) {
        state.menuItemsState[menuItem.id] -= 1;

        const existingItem = state.orderItems.find(item => item.name === menuItem.name);
        if (existingItem) {
          if (existingItem.quantity > 1) {
            existingItem.quantity -= 1;
          } else {
            state.orderItems = state.orderItems.filter(item => item.name !== menuItem.name);
          }
        }
      }
    },
    updateOrderQuantity: (state, action) => {
      const { id, change } = action.payload;
      const item = state.orderItems.find(item => item.id === id);
      if (item) {
        const newQuantity = item.quantity + change;
        if (newQuantity <= 0) {
          state.orderItems = state.orderItems.filter(item => item.id !== id);
        } else {
          item.quantity = newQuantity;
        }
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      state.orderItems = state.orderItems.filter(item => item.id !== id);
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    placeOrder: (state) => {
      // Reset order
      state.orderItems = [];
      state.menuItemsState = {};
    },
  },
});

export const {
  addToOrder,
  decrementMenuItem,
  updateOrderQuantity,
  removeItem,
  setPaymentMethod,
  placeOrder
} = orderSlice.actions;

export default orderSlice.reducer;
