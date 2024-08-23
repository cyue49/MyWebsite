import React, { useContext } from 'react'
import { LanguageContext } from '../../App'
import { schools } from '../../assets/data/education'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import CollapseList from '../common/CollapseList'

const EducationCard = () => {
    const language = useContext(LanguageContext);

    return (
        <div className='flex flex-col justify-center gap-2 w-full'>
            <div className='section-subtitle'>{(language === 'en') ? 'Education' : 'Éducation'}</div>
            <div className='flex flex-col gap-6 pl-2 border-l border-l-primaryColor'>
                {schools.map((school, index) => (
                    <div key={index} className='flex flex-col gap-2 px-4'>
                        <div className='font-bold text-lg border-l-4 border-l-primaryColor pl-2 text-lightColor w-fit'>{(language === 'en') ? school.en.name : school.fr.name}</div>

                        <div className='flex flex-row gap-2 uppercase font-bold text-sm text-lightColor/60 items-center'>
                            <FontAwesomeIcon className='resume-icon' icon={faCalendar} />
                            <div>{(language === 'en') ? school.en.date : school.fr.date}</div>
                        </div>

                        <div>{(language === 'en') ? school.en.subject : school.fr.subject}</div>

                        {(school.en.courses.length === 0) ? null :
                            <CollapseList title={(language === 'en') ? 'Some Courses Taken' : 'Quesques cours suivis'} list={(language === 'en') ? school.en.courses : school.fr.courses} icon={faCheck} />
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EducationCard
