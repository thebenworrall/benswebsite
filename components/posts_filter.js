import React, { useState } from 'react';
import classes from './posts_filter.module.css';
import formatTagId from '../utils/format_tag_id';

const PostsFilter = ({ onSearchChange, tags }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        onSearchChange(value);

        if (value.trim().length > 0) {
            const normalizedValue = value.trim().toLowerCase();
            const filteredSuggestions = tags
                .filter(tag => formatTagId(tag).toLowerCase().startsWith(normalizedValue))
                .slice(0, 4); // Limit to 4 suggestions
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchTerm(formatTagId(suggestion));
        onSearchChange(formatTagId(suggestion));
        setSuggestions([]);
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
            {suggestions.length > 0 && (
                <ul className={classes.suggestionsList}>
                    {suggestions.map((suggestion, index) => (
                        <li 
                            key={index} 
                            onClick={() => handleSuggestionClick(suggestion)}
                            className={classes.suggestionItem}
                        >
                            {formatTagId(suggestion)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PostsFilter;

// import classes from './posts_filter.module.css';
// import React, { useState } from 'react';

// const PostsFilter = ({ onSearchChange }) => {
//     const [searchTerm, setSearchTerm] = useState('');

//     const handleSearchChange = (event) => {
//         const { value } = event.target;
//         setSearchTerm(value);
//         onSearchChange(value);
//     };

//     return (
//         <div className={classes.filterContainer}>
//             <h2 className={classes.filterTitle}>Search Newsletters</h2>
//             <input
//                 type="text"
//                 placeholder="Type to filter by title or tags..."
//                 value={searchTerm}
//                 onChange={handleSearchChange}
//                 className={classes.searchInput}
//             />
//         </div>
//     );
// };

// export default PostsFilter;