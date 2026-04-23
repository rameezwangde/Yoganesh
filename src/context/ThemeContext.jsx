import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = [
    { 
        id: 'clinical', 
        name: 'Mastery Crimson', 
        class: '', 
        color: '#E11D48',
        colors: { bg: '#FFFFFF', primary: '#E11D48', secondary: '#881337' }
    }
];

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const saved = localStorage.getItem('yoganesh-theme');
        return saved || 'clinical';
    });

    useEffect(() => {
        localStorage.setItem('yoganesh-theme', currentTheme);
        
        // Apply class to document root
        const root = document.documentElement;
        themes.forEach(t => {
            if (t.class) root.classList.remove(t.class);
        });
        const active = themes.find(t => t.id === currentTheme);
        if (active && active.class) {
            root.classList.add(active.class);
        }
    }, [currentTheme]);

    const activeTheme = themes.find(t => t.id === currentTheme) || themes[0];

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, activeTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error('useTheme must be used within a ThemeProvider');
    return context;
};
