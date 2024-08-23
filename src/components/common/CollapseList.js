import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CollapseList = ({ title, list, icon }) => {
    const [showCourses, setShowCourses] = useState(false)

    const handleClick = () => {
        showCourses ? setShowCourses(false) : setShowCourses(true)
    }

    return (
        <div className='flex flex-col gap-3'>
            <div className='font-bold text-sm rounded-full border border-primaryColor w-fit px-3 py-1 text-primaryColor cursor-pointer hover:bg-primaryColor hover:text-lightColor hover-animation' onClick={handleClick}>{title}</div>

            <ul className={`rounded-xl border border-primaryColor w-fit p-3 ${showCourses ? '' : 'hidden'}`}>
                {list.map((item, idx) => (
                    <li key={idx}>
                        <FontAwesomeIcon className='mr-4 text-sm' icon={icon} />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CollapseList
