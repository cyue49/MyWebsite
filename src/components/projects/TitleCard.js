import React, { useContext, useState } from 'react'
import { LanguageContext } from '../../App'
import BubbledList from '../common/BubbledList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLink, faUpRightAndDownLeftFromCenter, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Dialog, DialogPanel } from '@headlessui/react'
import ProjectCard from './ProjectCard'

const TitleCard = ({ project }) => {
    const language = useContext(LanguageContext);

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='w-full lg:w-[48%] flex flex-col gap-2 items-start justify-start rounded-3xl border border-lightColor/40 hover:border-lightColor hover:scale-[1.01] p-4 hover-animation'>
            <div className='w-full flex flex-row items-start justify-between gap-2'>
                <div className='font-bold'>{(language === 'en') ? project.en.title : project.fr.title}</div>
                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} className='hover:scale-125 cursor-pointer shadow-type-3' onClick={() => setIsOpen(true)} />
            </div>

            <BubbledList list={project.technologies} />

            <div className='flex flex-row items-center justify-start gap-5'>
                {(project.links.length === 0) ? null : project.links.map((link, index) => (
                    <a href={link.link} target='_blank' rel='noreferrer' key={index}
                        className='flex flex-row gap-2 items-center border-b-2 border-b-transparent hover:border-primaryColor shadow-type-3 hover:scale-105 hover-animation'>
                        <FontAwesomeIcon icon={(link.name === 'GitHub') ? faGithub : faLink} className='p-0 m-0' />
                        {link.name}
                    </a>
                ))}
            </div>

            <div>{(language === 'en') ? project.en.description : project.fr.description}</div>

            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-30">
                <div className="fixed inset-0 w-screen center-of-div bg-bgColor/60 p-4 overflow-hidden">
                    <DialogPanel className="w-[95vw] lg:w-[90vw] xl:w-[60vw] h-[80vh] rounded-3xl border border-lightColor bg-darkColor overflow-auto no-scrollbar shadow-type-2 hover-animation">
                        <div className='sticky top-0 bg-darkColor flex flex-row items-start justify-between text-lightColor px-4 py-3 border-b border-b-lightColor z-50'>
                            <div className='font-bold text-lg text-lightColor tracking-wider'>{(language === 'en') ? project.en.title : project.fr.title}</div>
                            <FontAwesomeIcon icon={faXmark} onClick={() => setIsOpen(false)} className='cursor-pointer text-2xl shadow-type-3 hover:scale-125 hover-animation' />
                        </div>
                        <ProjectCard project={project} />
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    )
}

export default TitleCard
