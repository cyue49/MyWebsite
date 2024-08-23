import React, { useContext } from 'react'
import { LanguageContext } from '../../App'
import BubbledList from '../common/BubbledList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink, faSquare } from '@fortawesome/free-solid-svg-icons'

const ProjectCard = ({ project }) => {
    const language = useContext(LanguageContext);

    return (
        <div className='w-full flex flex-col gap-2 items-start justify-start p-4'>
            {/* technologies */}
            <BubbledList list={project.technologies} />

            {/* links */}
            <div className='flex flex-row items-center justify-start gap-5'>
                {(project.links.length === 0) ? null : <div className='font-bold text-primaryColor'>{(language === 'en') ? 'Links: ' : 'Liens: '}</div>}

                {(project.links.length === 0) ? null : project.links.map((link, index) => (
                    <a href={link.link} target='_blank' rel='noreferrer' key={index}
                        className='flex flex-row gap-2 items-center border-b-2 border-b-transparent hover:border-primaryColor shadow-type-3 hover:scale-105 hover-animation'>
                        <FontAwesomeIcon icon={(link.name === 'GitHub') ? faGithub : faLink} className='p-0 m-0' />
                        {link.name}
                    </a>
                ))}
            </div>

            {/* description */}
            <div className='flex flex-col items-start justify-start gap-1'>
                <div className='font-bold text-primaryColor'>{(language === 'en') ? 'Description: ' : 'Déscription: '}</div>
                <div>{(language === 'en') ? project.en.description : project.fr.description}</div>
            </div>

            {/* details */}
            <div className='flex flex-col items-start justify-start gap-1'>
                <div className='font-bold text-primaryColor'>{(language === 'en') ? 'Details: ' : 'Détails: '}</div>
                <div>{(language === 'en') ? project.en.details : project.fr.details}</div>

                <ul className='pl-4 flex flex-col gap-1'>
                    {((language === 'en') ? project.en.detailsList : project.fr.detailsList).map((item, index) => (
                        <li key={index} className='flex flex-row gap-4 items-center'>
                            <FontAwesomeIcon icon={faSquare} className='text-[8px]' />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* gallery */}
            <div className='flex flex-col items-start justify-start gap-1'>
                <div className='font-bold text-primaryColor'>{(language === 'en') ? 'Gallery: ' : 'Galerie: '}</div>
                <div className='p-4 flex flex-row gap-3 overflow-auto no-scrollbar border rounded-xl border-lightColor'>
                    {project.gallery.map((url, index) => (
                        <img
                            key={index}
                            src={require(`../../assets/gallery/${url}`)}
                            alt="project"
                            className='h-[60vmin] w-auto'
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
