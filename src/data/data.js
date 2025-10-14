// Sample data for Pizza POS app

export const pizzas = {
  sizes: [
    { id: 'small', name: 'Small', price: 8.99 },
    { id: 'medium', name: 'Medium', price: 10.99 },
    { id: 'large', name: 'Large', price: 12.99 },
    { id: 'xlarge', name: 'X-Large', price: 14.99 },
  ],
  bases: [
    { id: 'thin', name: 'Thin Crust', price: 0 },
    { id: 'thick', name: 'Thick Crust', price: 1.00 },
    { id: 'stuffed', name: 'Stuffed Crust', price: 2.00 },
  ],
  sauces: [
    { id: 'tomato', name: 'Tomato Sauce', price: 0 },
    { id: 'bbq', name: 'BBQ Sauce', price: 0.50 },
    { id: 'garlic', name: 'Garlic Sauce', price: 0.50 },
  ],
};

export const toppings = [
  { id: 'pepperoni', name: 'Pepperoni', price: 1.50 },
  { id: 'mushrooms', name: 'Mushrooms', price: 1.00 },
  { id: 'onions', name: 'Onions', price: 0.75 },
  { id: 'bellpeppers', name: 'Bell Peppers', price: 1.00 },
  { id: 'olives', name: 'Olives', price: 1.25 },
  { id: 'sausage', name: 'Sausage', price: 1.75 },
  { id: 'bacon', name: 'Bacon', price: 2.00 },
  { id: 'pineapple', name: 'Pineapple', price: 1.25 },
  { id: 'jalapenos', name: 'Jalapenos', price: 1.00 },
  { id: 'extraCheese', name: 'Extra Cheese', price: 1.50 },
];

export const portions = [
  { id: 'light', name: 'Light', multiplier: 0.5 },
  { id: 'normal', name: 'Normal', multiplier: 1 },
  { id: 'extra', name: 'Extra', multiplier: 1.5 },
];

export const deals = [
  {
    id: 'deal1',
    name: '2 Medium Pizzas Deal',
    description: '2 Medium Pizzas with 2 toppings each',
    basePrice: 18.99,
    items: [
      { type: 'pizza', size: 'medium', toppings: [] },
      { type: 'pizza', size: 'medium', toppings: [] },
    ],
  },
  {
    id: 'deal2',
    name: 'Family Feast',
    description: '1 Large Pizza, 1 Side, 1 Drink',
    basePrice: 24.99,
    items: [
      { type: 'pizza', size: 'large', toppings: [] },
      { type: 'side', id: 'garlicBread' },
      { type: 'drink', id: 'cola' },
    ],
  },
];

export const signatures = [
  {
    id: 'margherita',
    name: 'Margherita',
    description: 'Tomato sauce, mozzarella, basil',
    basePrice: 10.99,
    toppings: ['extraCheese'],
  },
  {
    id: 'pepperoni',
    name: 'Pepperoni',
    description: 'Tomato sauce, mozzarella, pepperoni',
    basePrice: 11.99,
    toppings: ['pepperoni'],
  },
  {
    id: 'veggie',
    name: 'Veggie Delight',
    description: 'Tomato sauce, mozzarella, mushrooms, onions, bell peppers',
    basePrice: 12.99,
    toppings: ['mushrooms', 'onions', 'bellpeppers'],
  },
];

export const sides = [
  { id: 'garlicBread', name: 'Garlic Bread', price: 4.99 },
  { id: 'chickenWings', name: 'Chicken Wings (6pcs)', price: 7.99 },
  { id: 'onionRings', name: 'Onion Rings', price: 5.99 },
];

export const dips = [
  { id: 'ranch', name: 'Ranch Dip', price: 0.99 },
  { id: 'bbq', name: 'BBQ Dip', price: 0.99 },
  { id: 'garlic', name: 'Garlic Dip', price: 0.99 },
];

export const drinks = [
  { id: 'cola', name: 'Cola', price: 2.49 },
  { id: 'sprite', name: 'Sprite', price: 2.49 },
  { id: 'orange', name: 'Orange Juice', price: 2.99 },
  { id: 'water', name: 'Bottled Water', price: 1.99 },
];
