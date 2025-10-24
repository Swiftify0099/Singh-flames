

const CategoryGrid = ({ menuCategories, selectedCategory, onCategoryClick }) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {menuCategories.map((category, index) => (
        <div
          key={index}
          onClick={() => onCategoryClick(category.name)}
          className={`${category.color} rounded-cosy p-6 cursor-pointer shadow-cosy-sm animate-slide-in-up hover-lift-professional transition-all duration-200 ${selectedCategory === category.name ? 'ring-4 ring-cosy-orange ring-opacity-50 scale-105' : 'hover:opacity-90'}`}
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <div className="text-cosy-gray-700 mb-3">
            <category.icon size={28} />
          </div>
          <h3 className="text-cosy-gray-900 font-semibold text-lg font-display">{category.name}</h3>
          <p className="text-cosy-gray-600 text-sm font-medium">{category.items} Items</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
