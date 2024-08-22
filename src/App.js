import React, { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import Home from './pages/Home'

function App() {
    const [language, setLanguage] = useState('en');
    const [theme, setTheme] = useState('dark');

    const handleLanguage = () => {
        language === 'en' ? setLanguage('fr') : setLanguage('en')
    }

    const handleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    useEffect(() => {
        const themes = ['dark', 'light']
        themes.forEach(theme => document.body.classList.remove(theme))
        document.body.classList.add(theme)
    }, [theme])

    return (
        <div>
            <div className='fixed top-4 left-4 z-10 flex flex-row items-center justify-start gap-4'>
                <div className='bg-darkColor border border-lightColor rounded-full font-bold py-2 px-3 cursor-pointer uppercase hover:bg-primaryColor hover:border-primaryColor shadow-type-1 hover-animation' onClick={handleLanguage}>{language}</div>
                <FontAwesomeIcon icon={faCircleHalfStroke} className='text-3xl text-lightColor hover:text-primaryColor hover-animation' onClick={handleTheme} />
            </div>


            <Router>
                <Routes>
                    <Route path="/" element={<Home language={language} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
