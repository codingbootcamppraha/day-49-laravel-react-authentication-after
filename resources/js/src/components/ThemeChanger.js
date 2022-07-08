import React, { useContext } from 'react';
import ThemeContext, { themes } from '../context/ThemeContext';


const ThemeChanger = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const showContext = () => theme === themes.light ? 'light' : 'dark';

    const toggleContext = () => theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light)

    return (
        <label className="toggle-theme">

            <span onClick={toggleContext}>Theme {showContext()}</span>
            
        </label>
    );
}

export default ThemeChanger;