import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import Warning from '../components/Warning'

const Projects = () => {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className='w-full relative min-h-screen flex flex-col items-center bg-midnight md:px-10 pt-8'>

        {isConnected === null && <Warning />}

        {/* Title */}
        <div className='w-full flex flex-col md:flex-row justify-between items-center'>
            <h1 className='text-3xl font-bold text-gradient uppercase'>Projects</h1>
            <p className='text-sm font-light text-white'>Refreshes in: <span className='text-sm font-normal text-primary'>13 days</span></p>
        </div>

        <ProjectCard />
    </div>
  )
}

export default Projects