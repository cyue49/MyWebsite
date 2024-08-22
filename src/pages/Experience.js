import React from 'react'

const Experience = ({ language }) => {
    return (
        <div>
            {language === 'en' ? 'Experience' : 'Expérience'}
        </div>
    )
}

export default Experience
