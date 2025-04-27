// Context.js

import React, { createContext, useState, useContext } from 'react';

// Create a context to hold visibility state
const VisibilityContext = createContext();

// Custom hook to use the visibility context
export const useVisibility = () => useContext(VisibilityContext);

// Context provider component
export const VisibilityProvider = ({ children }) => {
    const [showMenuAndFooter, setShowMenuAndFooter] = useState(true);

    return (
        <VisibilityContext.Provider value={{ showMenuAndFooter, setShowMenuAndFooter }}>
            {children}
        </VisibilityContext.Provider>
    );
};
