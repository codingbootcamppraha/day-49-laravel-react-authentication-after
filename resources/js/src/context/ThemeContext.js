import React, { createContext } from 'react';


export const themes = {
    light: {
        color: '#000',
        backgroundColor: '#fff',
        boxShadow: 'rgb(0 0 0 / 20%) -7.5px 7.5px 7.5px 0px'
    },
    dark: {
        color: '#fff',
        backgroundColor: '#000',
        boxShadow: '#fff -7.5px 7.5px 7.5px 0px'
    },
}

const ThemeContext = createContext(themes.light)

export default ThemeContext;