import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import './App.css';
import Home from './pages/Home'

function App() {
    let [language, setLanguage] = useState('en');

    const handleLanguage = () => {
        language === 'en' ? setLanguage('fr') : setLanguage('en')
    }

    return (
        <div>
            <div className='border rounded-full font-bold fixed top-4 left-4 z-10 py-2 px-3 cursor-pointer shadow-md shadow-primaryColor/50 uppercase hover:bg-lightColor hover:text-darkColor' onClick={handleLanguage}>{language}</div>

            <Router>
                <Routes>
                    <Route path="/" element={<Home language={language} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
