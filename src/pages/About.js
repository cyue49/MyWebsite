import React from 'react'
import Languages from '../components/About/Languages'

const About = ({ language }) => {
    return (
        <div className='px-5 py-3'>
            <Languages language={language}/>
            <div>Techonogies</div>
            <div>Skills</div>
            <div>Hobbies</div>
        </div>
    )
}

export default About
