import React, { useContext } from 'react'
import { LanguageContext } from '../../App'

const ExperienceCard = () => {
    const language = useContext(LanguageContext);

    return (
        <div className='flex flex-col justify-center gap-2 w-full max-w-md'>
            <div className='section-subtitle'>{(language === 'en') ? 'Experience' : 'Expérience'}</div>
            <div>todo</div>
        </div>
    )
}

export default ExperienceCard
