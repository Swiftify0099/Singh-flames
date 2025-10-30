import { useState } from "react";
import { pizzas } from "../../utils/data.js";
const OthersItems = ({
    categoryName,
    menuItemsState,
    addToOrder,
    getItemsByCategory,
    setSelectedCategory,
}) => {
    const Others = getItemsByCategory(categoryName);

    return (
        <div className="mb-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-display text-cosy-gray-900 dark:text-white">
                    Others
                </h2>
                <button
                    onClick={() => setSelectedCategory(null)}
                    className="text-cosy-gray-600 dark:text-cosy-gray-400 hover:text-cosy-orange transition-colors text-sm font-medium"
                >
                    Clear Selection
                </button>
            </div>

            {/* item Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Others.map((item, index) => (
                    <OtherCard
                        key={item.id}
                        item={item}
                        index={index}
                        sizes={pizzas.sizes} // reuse of pizza sizes for others too
                        addToOrder={addToOrder}
                    />
                ))}
            </div>
        </div>
    );
};

const OtherCard = ({ item, index, sizes, addToOrder }) => {
    const [selectedSize, setSelectedSize] = useState(null);

    const handleAdd = () => {
        if (!selectedSize) {
            return alert("Please select a size before adding!");
        }
        const finalPrice = selectedSize.price;
        const selectedItem = {
            id: `${item.id}-${selectedSize.id}`,
            name: `${item.name} (${selectedSize.name})`,
            price: finalPrice,
            baseItem: item.id,
            size: selectedSize.id,
        }
        addToOrder(selectedItem);
        setSelectedSize(null);
    };

    return (
        <div
            className={`relative p-5 rounded-cosy transition-all duration-200 border-2 shadow-md hover:scale-[1.02] animate-slide-in-up bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600`}
            style={{ animationDelay: `${index * 0.05}s` }}
        >
            {/* Accent Line */}
            <div className="absolute top-0 left-0 h-full w-2 bg-pink-400 rounded-l-cosy"></div>

            {/* Item Info */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.name}
            </h3>

            {/* Radio Buttons for Sizes */}
            <div className="space-y-2 mb-4">
                {sizes.map((size) => (
                    <label
                        key={size.id}
                        className={`flex items-center justify-between cursor-pointer rounded-lg border p-2 transition-colors ${selectedSize?.id === size.id
                            ? "border-pink-500 bg-pink-50 dark:bg-pink-100/10"
                            : "border-gray-300 dark:border-gray-600 hover:border-pink-300"
                            }`}
                    >
                        <div className="flex items-center gap-3">
                            <input
                                type="radio"
                                name={item.id}
                                checked={selectedSize?.id === size.id}
                                onChange={() => setSelectedSize(size)}
                                className="text-orange-500 focus:ring-pink-400 cursor-pointer"
                            />
                            <span className="font-medium text-gray-900 dark:text-white">
                                {size.name}
                            </span>
                        </div>
                        <span className="text-orange-500 dark:text-orange-400 font-semibold">
                            ${size.price.toFixed(2)}
                        </span>
                    </label>
                ))}
            </div>

            {/* Add Button */}
            <button
                onClick={handleAdd}
                className="w-full bg-orange-500 hover:bg-orange-400 text-white font-semibold py-2 rounded-cosy transition-colors"
            >
                Add to Order
            </button>
        </div>
    )
}

export default OthersItems;