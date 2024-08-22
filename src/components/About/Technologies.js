import React, { useContext } from 'react'
import { LanguageContext } from '../../App'

const Technologies = () => {
    const language = useContext(LanguageContext);

    return (
        <div className='flex flex-col justify-center gap-2 size-fit'>
            <div className='font-bold text-lg'>{(language === 'en') ? 'Technologies' : 'Technologies'}</div>
            <div>todo</div>
        </div>
    )
}

export default Technologies
