import React, { useContext, useState } from 'react'
import { LanguageContext } from '../App'
import { projects } from '../assets/data/projects'
import TitleCard from '../components/projects/TitleCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
    const language = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/')
    }

    return (
        <div className='h-screen w-screen flex flex-row items-center justify-center content-center flex-wrap bg-grid'>
            <div className="w-[95vw] lg:w-[90vw] xl:w-[60vw] h-[80vh] rounded-3xl border border-lightColor bg-darkColor overflow-auto no-scrollbar shadow-type-2 hover-animation window-open-animation z-20">
                <div className='sticky top-0 bg-darkColor flex flex-row items-center justify-between text-lightColor px-4 py-3 border-b border-b-lightColor z-30'>
                    <div className='font-bold text-xl md:text-4xl text-lightColor tracking-wider'>{(language === 'en') ? 'Projects' : 'Projets'}</div>
                    <FontAwesomeIcon icon={faXmark} onClick={handleNavigate} className='cursor-pointer text-2xl shadow-type-3 hover:scale-125 hover-animation' />
                </div>

                <div className='px-4 lg:px-6 py-3'>
                    <div className='flex flex-row gap-6 py-4 flex-wrap items-stretch justify-start lg:justify-around'>
                        {projects.map((project, index) => (
                            <TitleCard project={project} key={index} />
                        ))}
                        <div className='w-full lg:w-[48%]'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
