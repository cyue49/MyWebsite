import React, { useContext } from 'react'
import { LanguageContext } from '../../App'
import BubbledList from '../common/BubbledList'

const TitleCard = ({ project }) => {
    const language = useContext(LanguageContext);

    return (
        <div className='w-full lg:w-[48%] flex flex-col items-start justify-start rounded-3xl border border-lightColor/40 hover:border-lightColor hover:scale-[1.02] p-4 cursor-pointer hover-animation'>
            <div className='font-bold'>{(language === 'en') ? project.en.title : project.fr.title}</div>
            <BubbledList list={project.technologies}/>
            <div>{(language === 'en') ? project.en.description : project.fr.description}</div>
        </div>
    )
}

export default TitleCard
