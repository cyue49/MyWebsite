import React, { useContext } from 'react'
import { LanguageContext } from '../../App'

const Hobbies = () => {
    const language = useContext(LanguageContext);

    return (
        <div className='flex flex-col justify-center gap-2 size-fit'>
            <div className='font-bold text-2xl'>{(language === 'en') ? 'Hobbies' : 'Loisirs'}</div>
            <div>todo</div>
        </div>
    )
}

export default Hobbies
