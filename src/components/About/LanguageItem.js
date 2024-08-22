import React from 'react'

const LanguageItem = ({ label, percentage }) => {
    return (
        <div className='flex flex-row items-center justify-between gap-4 w-full max-w-sm'>
            <div>{label}</div>
            <div className='w-8/12 bg-lightColor/20 rounded-full h-3'>
                <div className={`bg-primaryColor h-3 rounded-full ${percentage}`}></div>
            </div>
        </div>
    )
}

export default LanguageItem
