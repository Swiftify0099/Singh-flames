export const pizzas = {
  sizes: [
    { id: 'small', name: 'Small', price: 8.99 },
    { id: 'medium', name: 'Medium', price: 10.99 },
    { id: 'large', name: 'Large', price: 12.99 },
    { id: 'xlarge', name: 'X-Large', price: 14.99 },
  ],
  bases: [
    { id: 'thin', name: 'Thin Crust', price: 1.0 },
    { id: 'thick', name: 'Thick Crust', price: 1.5 },
    { id: 'stuffed', name: 'Stuffed Crust', price: 2.0 },
  ],
  sauces: [
    { id: 'tomato', name: 'Tomato Sauce', price: 0.5 },
    { id: 'bbq', name: 'BBQ Sauce', price: 0.7 },
    { id: 'pesto', name: 'Pesto Sauce', price: 0.8 },
  ],
};

export const toppings = [
  { id: 'pepperoni', name: 'Pepperoni', price: 1.5 },
  { id: 'mushrooms', name: 'Mushrooms', price: 1.0 },
  { id: 'onions', name: 'Onions', price: 0.8 },
  { id: 'bellpeppers', name: 'Bell Peppers', price: 1.0 },
  { id: 'olives', name: 'Olives', price: 1.2 },
  { id: 'extraCheese', name: 'Extra Cheese', price: 1.5 },
  { id: 'jalapenos', name: 'Jalapeños', price: 1.0 },
];

export const sides = [
  { id: 'garlicBread', name: 'Garlic Bread', price: 4.99 },
  { id: 'cheesySticks', name: 'Cheesy Breadsticks', price: 5.49 },
  { id: 'chickenWings', name: 'Chicken Wings', price: 6.99 },
];

export const drinks = [
  { id: 'cola', name: 'Coca-Cola', price: 1.99 },
  { id: 'sprite', name: 'Sprite', price: 1.99 },
  { id: 'fanta', name: 'Fanta', price: 1.99 },
  { id: 'water', name: 'Mineral Water', price: 0.99 },
];

export const dips = [
  { id: 'garlicDip', name: 'Garlic Dip', price: 0.99 },
  { id: 'bbqDip', name: 'BBQ Dip', price: 0.99 },
  { id: 'spicyDip', name: 'Spicy Dip', price: 0.99 },
];

export const signatures = [
  {
    id: 'margherita',
    name: 'Margherita',
    description: 'Tomato sauce, mozzarella, basil',
    price: 10.99,
    toppings: ['extraCheese'],
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni',
    description: 'Tomato sauce, mozzarella, pepperoni',
    price: 11.99,
    toppings: ['pepperoni'],
  },
  {
    id: 'veggie',
    name: 'Veggie Delight',
    description: 'Tomato sauce, mozzarella, mushrooms, onions, bell peppers',
    price: 12.99,
    toppings: ['mushrooms', 'onions', 'bellpeppers'],
  },
];

export const deals = [
  {
    id: 'deal1',
    name: '2 Medium Pizzas Deal',
    description: '2 Medium Pizzas with 2 toppings each',
    price: 18.99,
    items: [
      { type: 'pizza', size: 'medium', toppings: [] },
      { type: 'pizza', size: 'medium', toppings: [] },
    ],
  },
  {
    id: 'deal2',
    name: 'Family Feast',
    description: '1 Large Pizza, 1 Side, 1 Drink',
    price: 24.99,
    items: [
      { type: 'pizza', size: 'large', toppings: [] },
      { type: 'side', id: 'garlicBread' },
      { type: 'drink', id: 'cola' },
    ],
  },
];

export default {
  pizzas,
  toppings,
  sides,
  drinks,
  dips,
  signatures,
  deals,
};
