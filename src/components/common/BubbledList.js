import React from 'react'

const BubbledList = ({ list }) => {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row flex-wrap gap-2 py-2 px-0'>
                {list.map((item, index) => (
                    <div key={index} className='border border-primaryColor rounded-full py-1 px-4'>{item}</div>
                ))}
            </div>
        </div>
    )
}

export default BubbledList
