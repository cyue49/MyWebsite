import React, { useContext } from 'react'
import { LanguageContext } from '../../App'

const TitleCard = ({ project }) => {
    const language = useContext(LanguageContext);

    return (
        <div className='size-fit flex flex-col items-center justify-center rounded-3xl border border-lightColor p-4'>
            <div className='font-bold'>{(language === 'en') ? project.en.title : project.fr.title}</div>
        </div>
    )
}

export default TitleCard
