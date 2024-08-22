import React, { useContext } from 'react'
import { LanguageContext } from '../../App'
import { technologies } from '../../assets/data/technologies'
import BubbledList from '../common/BubbledList'

const Technologies = () => {
    const language = useContext(LanguageContext);

    return (
        <div className='flex flex-col justify-center gap-2 size-fit'>
            <div className='font-bold text-xl'>{(language === 'en') ? 'Technologies' : 'Technologies'}</div>
            {technologies.map((technology, index) => (
                <div key={index}>
                    <div className='font-bold'>{(language === 'en') ? technology.en : technology.fr}</div>
                    <BubbledList list={technology.list} />
                </div>
            ))}
        </div>
    )
}

export default Technologies
