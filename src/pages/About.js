import React from 'react'
import Languages from '../components/about/Languages'
import Technologies from '../components/about/Technologies'
import Skills from '../components/about/Skills'
import Hobbies from '../components/about/Hobbies'

const About = () => {

    return (
        <div className='px-5 py-3 flex flex-col flex-wrap gap-4'>
            <Languages />
            <Technologies />
            <Skills />
            <Hobbies />
        </div>
    )
}

export default About