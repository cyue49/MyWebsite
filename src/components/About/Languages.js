import React, { useContext } from 'react'
import { LanguageContext } from '../../App'
import LanguageItem from './LanguageItem'

const Languages = () => {
    const language = useContext(LanguageContext);

    return (
        <div className='flex flex-col justify-center gap-2 w-full max-w-md'>
            <div className='section-subtitle'>{(language === 'en') ? 'Languages' : 'Langues'}</div>
            <div className='flex flex-col justify-center gap-2'>
                <LanguageItem label={(language === 'en') ? 'English' : 'Anglais'} percentage='w-[100%]' />
                <LanguageItem label={(language === 'en') ? 'French' : 'Français'} percentage='w-[95%]' />
                <LanguageItem label={(language === 'en') ? 'Chinese' : 'Chinois'} percentage='w-[95%]' />
                <LanguageItem label={(language === 'en') ? 'Japanese' : 'Japonais'} percentage='w-[40%]' />
            </div>
        </div>
    )
}

export default Languages
