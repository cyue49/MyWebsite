import React, { useContext } from 'react'
import { LanguageContext } from '../../App'
import LanguageItem from './LanguageItem'

const Languages = () => {
    const language = useContext(LanguageContext);

    return (
        <div className='flex flex-col justify-center gap-2'>
            <div className='font-bold text-lg'>{(language === 'en') ? 'Languages' : 'Langues'}</div>
            <div className='flex flex-col justify-center gap-2'>
                <LanguageItem label={(language === 'en') ? 'English' : 'Anglais'} percentage='100%' />
                <LanguageItem label={(language === 'en') ? 'French' : 'Français'} percentage='95%' />
                <LanguageItem label={(language === 'en') ? 'Chinese' : 'Chinois'} percentage='95%' />
                <LanguageItem label={(language === 'en') ? 'Japanese' : 'Japonais'} percentage='40%' />
            </div>
        </div>
    )
}

export default Languages
