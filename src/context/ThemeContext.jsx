import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = [
    { 
        id: 'clinical', 
        name: 'Clinical Elite', 
        class: '', 
        color: '#3B82F6',
        colors: { bg: '#FDFBF7', primary: '#3B82F6', secondary: '#1E3A8A' }
    },
    { 
        id: 'midnight', 
        name: 'Neural Midnight', 
        class: 'theme-midnight', 
        color: '#10B981',
        colors: { bg: '#0A0A0B', primary: '#10B981', secondary: '#064E3B' }
    },
    { 
        id: 'crimson', 
        name: 'Mastery Crimson', 
        class: 'theme-crimson', 
        color: '#E11D48',
        colors: { bg: '#FFFFFF', primary: '#E11D48', secondary: '#881337' }
    },
    { 
        id: 'gold', 
        name: 'Celestial Gold', 
        class: 'theme-gold', 
        color: '#D4AF37',
        colors: { bg: '#0F172A', primary: '#D4AF37', secondary: '#92400E' }
    },
    { 
        id: 'industrial', 
        name: 'Zen Industrial', 
        class: 'theme-industrial', 
        color: '#6366F1',
        colors: { bg: '#F1F5F9', primary: '#6366F1', secondary: '#312E81' }
    },
    { 
        id: 'sage', 
        name: 'Sage Tranquility', 
        class: 'theme-sage', 
        color: '#059669',
        colors: { bg: '#F7FAF9', primary: '#059669', secondary: '#064E3B' }
    },
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
