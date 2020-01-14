import React from 'react';

import './search-box.styles.css';

/* 
Functional components don't have access to lifecycle methods.
Functional components that gets props and returns HTML.
If you don't need state or access lifecycle methods, just use functional components.
*/

export const SearchBox = ({placeholder, handleChange}) => (
    <input 
        className='search'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
    />
)