import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'

const ContentItem = ({ label }) => {
    return (
        <div className='flex flex-row items-center gap-4 border border-lightColor bg-darkColor opacity-60 hover:opacity-100 shadow-type-1 rounded-full py-2 px-4 min-w-40 cursor-pointer hover-animation appear-animation'>
            <FontAwesomeIcon icon={faFolder} className='text-xl'/>
            <div>{label}</div>
        </div>
    )
}

export default ContentItem
