import classes from './posts_filter.module.css';
import React, { useState } from 'react';

const PostsFilter = ({ onSearchChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        onSearchChange(value);
    };

    return (
        <div className={classes.filterContainer}>
            <h2 className={classes.filterTitle}>Search Newsletters</h2>
            <input
                type="text"
                placeholder="Type to filter by title or tags..."
                value={searchTerm}
                onChange={handleSearchChange}
                className={classes.searchInput}
            />
        </div>
    );
};

export default PostsFilter;