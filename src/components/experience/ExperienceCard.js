import React, { useContext } from 'react'
import { LanguageContext } from '../../App'
import { experiences } from '../../assets/data/experience'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

const ExperienceCard = () => {
    const language = useContext(LanguageContext);

    return (
        <div className='flex flex-col justify-center gap-2 w-full'>
            <div className='section-subtitle'>{(language === 'en') ? 'Experience' : 'Expérience'}</div>
            <div className='flex flex-col gap-6 pl-2 border-l border-l-primaryColor'>
                {experiences.map((experience, index) => (
                    <div key={index} className='flex flex-col gap-2 px-4'>
                        <div className='font-bold text-lg border-l-4 pl-2 border-l-primaryColor text-lightColor w-fit'>{(language === 'en') ? experience.en.position : experience.fr.position}</div>

                        <div className='flex flex-row gap-2 uppercase font-bold text-sm text-lightColor/60 items-center'>
                            <FontAwesomeIcon className='resume-icon' icon={faCalendar} />
                            <div>{(language === 'en') ? experience.en.date : experience.fr.date}</div>
                        </div>

                        <div>{(language === 'en') ? experience.en.company : experience.fr.company}</div>

                        <ul>
                            {(language === 'en' ? experience.en.tasks : experience.fr.tasks).map((task, idx) => (
                                <li key={idx}>
                                    <FontAwesomeIcon className='mr-4 text-sm' icon={faCaretRight} />
                                    {task}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperienceCard
