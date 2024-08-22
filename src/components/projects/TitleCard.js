import React, { useContext } from 'react'
import { LanguageContext } from '../../App'
import BubbledList from '../common/BubbledList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const TitleCard = ({ project }) => {
    const language = useContext(LanguageContext);

    return (
        <div className='w-full lg:w-[48%] flex flex-col gap-2 items-start justify-start rounded-3xl border border-lightColor/40 hover:border-lightColor hover:scale-[1.02] p-4 cursor-pointer hover-animation'>
            <div className='font-bold'>{(language === 'en') ? project.en.title : project.fr.title}</div>

            <BubbledList list={project.technologies} />

            <div className='flex flex-row items-center justify-start gap-5'>
                {(project.links.length === 0) ? null : project.links.map((link, index) => (
                    <a href={link.link} target='_blank' rel='noreferrer'
                        className='flex flex-row gap-2 items-center border-b-2 border-b-transparent hover:border-primaryColor shadow-type-3 hover:scale-105 hover-animation'>
                        <FontAwesomeIcon icon={(link.name === 'GitHub') ? faGithub : faLink} className='p-0 m-0' />
                        {link.name}
                    </a>
                ))}
            </div>


            <div>{(language === 'en') ? project.en.description : project.fr.description}</div>
        </div>
    )
}

export default TitleCard
