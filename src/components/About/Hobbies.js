import React, { useContext } from 'react'
import { LanguageContext } from '../../App'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette, faMusic } from '@fortawesome/free-solid-svg-icons'

const Hobbies = () => {
    const language = useContext(LanguageContext);

    return (
        <div className='flex flex-col justify-center gap-2 size-fit'>
            <div className='section-subtitle'>{(language === 'en') ? 'Hobbies' : 'Loisirs'}</div>

            <ul className='flex flex-col gap-1'>
                <li className='flex flex-row gap-4 items-center'>
                    <FontAwesomeIcon icon={faPalette} className='text-lg' />
                    <div>{(language === 'en') ? 'Drawing' : 'Dessiner'}</div>
                </li>
                <li className='flex flex-row gap-4 items-center'>
                    <FontAwesomeIcon icon={faMusic} className='text-lg' />
                    <div>{(language === 'en') ? 'Playing piano' : 'Jouer du piano'}</div>
                </li>
            </ul>
        </div>
    )
}

export default Hobbies
