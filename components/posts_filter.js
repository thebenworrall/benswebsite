import React, { useState } from 'react';
import Link from 'next/link';
import classes from './posts_filter.module.css';
import formatTagId from '../utils/format_tag_id';

const PostsFilter = ({ onSearchChange, tags, posts, showEssays, setShowEssays, showFiction, setShowFiction }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleSearchChange = (event) => {
        const { value } = event.target;
        setSearchTerm(value);
        onSearchChange(value);

        if (value.trim().length > 0) {
            const normalizedValue = value.trim().toLowerCase();
            
            // Get tag suggestions
            const tagSuggestions = tags
                .filter(tag => formatTagId(tag).toLowerCase().includes(normalizedValue))
                .map(tag => ({ type: 'tag', value: formatTagId(tag), display: `#${formatTagId(tag)}` }));

            // Get title suggestions
            const titleSuggestions = posts
                .filter(post => post.title.toLowerCase().includes(normalizedValue))
                .slice(0, 3)
                .map(post => ({ 
                    type: 'post', 
                    value: post.title, 
                    display: post.title,
                    id: post.id,
                    image: post.mainImage
                }));

            // Combine and limit suggestions
            const allSuggestions = [...tagSuggestions, ...titleSuggestions].slice(0, 6);
            setSuggestions(allSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        if (suggestion.type === 'post') {
            // For posts, we'll let the Link component handle navigation
            setSuggestions([]);
        } else {
            // For tags, use the existing filter behavior
            setSearchTerm(suggestion.value);
            onSearchChange(suggestion.value);
            setSuggestions([]);
        }
    };

    return (
        <div className={classes.filterContainer}>
            <h2 className={classes.filterTitle}>Search Stories</h2>
            <div style={{ position: 'relative', width: '100%', maxWidth: '600px' }}>
                <input
                    type="text"
                    placeholder="🔍 Search by title, tags, or topics..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className={classes.searchInput}
                />
            </div>
            
            {/* Content Type Toggles */}
            <div className={classes.toggleContainer}>
                <div className={classes.toggleGroup}>
                    <label className={`${classes.toggleLabel} ${showEssays ? classes.toggleActive : ''}`}>
                        <input
                            type="checkbox"
                            checked={showEssays}
                            onChange={(e) => setShowEssays(e.target.checked)}
                            className={classes.toggleInput}
                        />
                        <span className={classes.toggleText}>Essays</span>
                    </label>
                    
                    <label className={`${classes.toggleLabel} ${showFiction ? classes.toggleActive : ''}`}>
                        <input
                            type="checkbox"
                            checked={showFiction}
                            onChange={(e) => setShowFiction(e.target.checked)}
                            className={classes.toggleInput}
                        />
                        <span className={classes.toggleText}>Fiction</span>
                    </label>
                </div>
            </div>
            {suggestions.length > 0 && (
                <ul className={classes.suggestionsList}>
                    {suggestions.map((suggestion, index) => (
                        <li 
                            key={index} 
                            className={classes.suggestionItem}
                        >
                            {suggestion.type === 'post' ? (
                                <Link href={`/newsletter/${suggestion.id}`} onClick={() => handleSuggestionClick(suggestion)}>
                                    <div className={classes.postSuggestion}>
                                        <img 
                                            src={suggestion.image} 
                                            alt={suggestion.display}
                                            className={classes.suggestionImage}
                                        />
                                        <span className={classes.suggestionText}>
                                            {suggestion.display}
                                        </span>
                                    </div>
                                </Link>
                            ) : (
                                <div onClick={() => handleSuggestionClick(suggestion)}>
                                    <span style={{ 
                                        color: 'rgb(158, 64, 64)',
                                        fontWeight: '600'
                                    }}>
                                        {suggestion.display}
                                    </span>
                                </div>
                            )}
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