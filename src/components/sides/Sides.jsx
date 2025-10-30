import { useState } from "react";
import { sidesData } from "../../utils/data.js";

const Sides = ({ menuItemsState, handleAddToOrder }) => {
  const [quantities, setQuantities] = useState({});
  const [comments, setComments] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSections = sidesData.filter((section) =>
    section.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectChange = (itemName, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [itemName]: option,
    }));
  };

  const handleQtyChange = (itemName, value) => {
    setQuantities((prev) => ({
      ...prev,
      [itemName]: Math.max(1, parseInt(value) || 1),
    }));
  };

  const handleCommentChange = (itemName, value) => {
    setComments((prev) => ({
      ...prev,
      [itemName]: value,
    }));
  };

  const handleAddClick = (sectionName, itemName, price) => {
    const option = selectedOptions[itemName];
    const qty = quantities[itemName] || 1;
    const comment = comments[itemName] || "";
    const fullName = option ? `${itemName} (${option})` : itemName;
    handleAddToOrder(sectionName, fullName, price, qty, comment);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search sides..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border-2 border-gray-200 rounded-2xl bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 focus:outline-none focus:border-orange-400 transition-all shadow-sm"
        />
      </div>

      {/* Sections */}
      {(filteredSections.length ? filteredSections : sidesData).map(
        (section, sectionIndex) => (
          <div
            key={section.name}
            className="mb-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl p-7 shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-in-up"
            style={{ animationDelay: `${sectionIndex * 0.05}s` }}
          >
            {/* Section Title */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-7 w-2 rounded-full bg-orange-500"></div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-display">
                {section.name}
              </h2>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, index) => (
                <div
                  key={item.name}
                  className="relative p-5 rounded-2xl border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300 animate-slide-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Accent Bar */}
                  <div className="absolute top-0 left-0 h-full w-1.5 bg-orange-400 rounded-l-2xl"></div>

                  {/* Item Name */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {item.name}
                  </h3>

                  {/* Options + Qty + Add */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
                    {/* Dropdown */}
                    {item.options?.length > 0 && (
                      <select
                        value={selectedOptions[item.name] || ""}
                        onChange={(e) =>
                          handleSelectChange(item.name, e.target.value)
                        }
                        className="border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 w-full sm:w-1/2 bg-white dark:bg-gray-900 dark:text-gray-100 focus:border-orange-400 transition-all"
                      >
                        <option value="">Select Option</option>
                        {item.options.map((option, idx) => (
                          <option key={idx} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    )}

                    {/* Qty Input */}
                    <input
                      type="number"
                      min="1"
                      value={quantities[item.name] || 1}
                      onChange={(e) => handleQtyChange(item.name, e.target.value)}
                      className="w-20 text-center border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-900 dark:text-gray-100 focus:border-orange-400 transition-all"
                    />

                    {/* Add Button */}
                    <button
                      onClick={() =>
                        handleAddClick(section.name, item.name, item.price)
                      }
                      className="flex-1 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all"
                    >
                      Add
                    </button>
                  </div>

                  {/* Comment Box */}
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    value={comments[item.name] || ""}
                    onChange={(e) =>
                      handleCommentChange(item.name, e.target.value)
                    }
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-900 dark:text-gray-100 focus:border-orange-400 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Sides;
