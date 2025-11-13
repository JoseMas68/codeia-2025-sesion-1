import React from 'react';

const categories = ['All', 'Movies', 'TV', 'Trending'];
const ratingOptions = [
  { label: 'Todas', value: 0 },
  { label: '5+ ⭐', value: 5 },
  { label: '7+ ⭐', value: 7 },
  { label: '8+ ⭐', value: 8 },
];

const SearchFilterBar = ({ search, onSearchChange, category, onCategoryChange, minRating, onMinRatingChange }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="bg-white/5 p-4 rounded-lg flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Search Input */}
        <div className="flex-1">
          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar películas o series..."
            className="w-full bg-white/10 text-white placeholder-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                category === cat ? 'bg-primary text-white' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Rating Filter */}
        <div className="flex items-center gap-2 flex-wrap">
          {ratingOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onMinRatingChange(option.value)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                minRating === option.value ? 'bg-primary text-white' : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBar;
