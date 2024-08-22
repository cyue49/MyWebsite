import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProfileLink = ({ link, icon, label }) => {
    return (
        <a href={link} target='_blank' rel='noreferrer'
            className='flex flex-row gap-2 items-center text-xl border-b-2 border-b-transparent hover:border-primaryColor opacity-60 hover:opacity-100 hover-animation'>
            <FontAwesomeIcon icon={icon} className='p-0 m-0' />
            <div>{label}</div>
        </a>
    )
}

export default ProfileLink
