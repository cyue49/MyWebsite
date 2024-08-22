import React, { useContext } from 'react'
import { LanguageContext } from '../../App'
import { skills } from '../../assets/data/skills'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    const language = useContext(LanguageContext);

    return (
        <div className='flex flex-col justify-center gap-2 size-fit'>
            <div className='section-subtitle'>{(language === 'en') ? 'Skills' : 'Compétances'}</div>
            {skills.map((skill, index) => (
                <div key={index} className='flex flex-col gap-2'>
                    <div className='font-bold'>{(language === 'en') ? skill.titleEN : skill.titleFR}</div>
                    <ul className='pl-4 flex flex-col gap-1'>
                        {((language === 'en') ? skill.list.en : skill.list.fr).map((item, idx) => (
                            <li key={idx} className='flex flex-row gap-4 items-center'>
                                <FontAwesomeIcon icon={faSquare} className='text-[8px]' />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default Skills
