import React from 'react';
import Input from '../../atoms/Input/Input';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <div className="search-bar">
            <Input placeholder="Search..." />
        </div>
    );
};

export default SearchBar;
