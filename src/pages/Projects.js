import React from 'react'
import { projects } from '../assets/data/projects'
import TitleCard from '../components/projects/TitleCard'

const Projects = () => {
    return (
        <div className='px-4 lg:px-6 py-3'>
            <div className='flex flex-row gap-6 py-4 flex-wrap items-stretch justify-start lg:justify-between'>
                {projects.map((project, index) => (
                    <TitleCard project={project} key={index} />
                ))}
            </div>
        </div>
    )
}

export default Projects
