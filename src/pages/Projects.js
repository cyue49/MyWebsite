import React from 'react'

const Projects = ({ language }) => {
    return (
        <div>
            {language === 'en' ? 'Projects' : 'Projets'}
        </div>
    )
}

export default Projects
