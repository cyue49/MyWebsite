import React from 'react'

const About = ({ language }) => {
    return (
        <div>
            {language === 'en' ? 'About' : 'Profil'}
        </div>
    )
}

export default About
