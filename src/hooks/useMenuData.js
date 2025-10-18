import { useQuery } from '@tanstack/react-query';
import { Coffee, Fish, IceCream, Utensils, Wine } from 'lucide-react';
//bottom recent top orders when user click on the create your own card that time we have to render these cards in bottom in maincontent section 
// Mock API function - replace with actual API call
const fetchMenuData = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return {
    categories: [
      { name: 'Create Your Own', items: 12, color: 'bg-green-200', icon: Coffee },
      { name: 'Deals', items: 8, color: 'bg-purple-200', icon: Coffee },
      { name: 'Signatures', items: 15, color: 'bg-purple-200', icon: Fish },
      { name: 'Others', items: 7, color: 'bg-pink-200', icon: Utensils },
      { name: 'Sides', items: 9, color: 'bg-purple-200  ', icon: IceCream },
      { name: 'Dips', items: 11, color: 'bg-pink-200', icon: Coffee },
      { name: 'Drinks', items: 12, color: 'bg-green-200', icon: Wine }
    ],
    items: [
      { id: 'm1', name: 'Create Your Own', price: 7.50, category: 'Main course' },
      { id: 'm2', name: 'Margherita Pizza', price: 12.75, category: 'Main course' },
      { id: 'm3', name: 'Fillet steak', price: 11.60, category: 'Main course' },
      { id: 'm4', name: 'Beefsteak', price: 10.20, category: 'Main course' },
      { id: 'm5', name: 'Roast beef', price: 10.50, category: 'Main course' },
      { id: 'm6', name: 'Buffalo wings', price: 8.85, category: 'Main course' },
      { id: 'm7', name: 'Lobster', price: 13.30, category: 'Main course' },
      { id: 'm8', name: 'Red caviar', price: 12.30, category: 'Main course' }
    ]
  };
};

export const useMenuData = () => {
  return useQuery({
    queryKey: ['menuData'],
    queryFn: fetchMenuData,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};
