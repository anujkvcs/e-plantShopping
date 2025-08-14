import React, { useState } from 'react';
import './SearchFilter.css';

const SearchFilter = ({ onSearch, onFilter, categories }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [priceRange, setPriceRange] = useState({ min: '', max: '' });

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const handleCategoryFilter = (e) => {
        const category = e.target.value;
        setSelectedCategory(category);
        onFilter({ category, priceRange });
    };

    const handlePriceFilter = () => {
        onFilter({ category: selectedCategory, priceRange });
    };

    return (
        <div className="search-filter-container">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search plants..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="search-input"
                />
            </div>
            
            <div className="filter-section">
                <select 
                    value={selectedCategory} 
                    onChange={handleCategoryFilter}
                    className="category-filter"
                >
                    <option value="">All Categories</option>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                    ))}
                </select>
                
                <div className="price-filter">
                    <input
                        type="number"
                        placeholder="Min $"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                        className="price-input"
                    />
                    <input
                        type="number"
                        placeholder="Max $"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                        className="price-input"
                    />
                    <button onClick={handlePriceFilter} className="filter-btn">Filter</button>
                </div>
            </div>
        </div>
    );
};

export default SearchFilter;