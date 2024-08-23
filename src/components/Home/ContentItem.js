import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { useNavigate } from 'react-router-dom'

const ContentItem = ({ label, path }) => {
    const [isHovered, setIsHovered] = useState(false)

    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`/${path}`)
    }

    return (
        <div>
            <div className='flex flex-row items-center gap-4 border border-lightColor bg-darkColor opacity-55 hover:opacity-100 shadow-type-1 rounded-full py-2 px-4 min-w-40 cursor-pointer hover:scale-105 hover-animation' onClick={handleNavigate} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                {!isHovered ? <FontAwesomeIcon icon={faFolder} className='text-xl' /> : <FontAwesomeIcon icon={faFolderOpen} className='text-xl' />}
                <div>{label}</div>
            </div>
        </div>
    )
}

export default ContentItem
