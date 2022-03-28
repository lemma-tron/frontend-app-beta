import React, { useRef, useState } from 'react'

const dummy = {
    id: 1,
    name: '7A-2',
    company: 'Company Name',
    assetType: 'LEMA',
    votes: '431188',
    duration: '1 month 14 days',
    summary: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.',
    min: '0.01',
    max: '1121.8',
    price: '500 USD',
    arp: '23',
    coverImage: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b7d5e883-bb14-444b-909c-e97c12396fd3/df2ir6n-8ff3ec7c-39cf-4d20-870f-eb72f6bddf58.jpg/v1/fill/w_200,h_250,q_70,strp/tuft_of_sunshine_by_reeddrawsonda_df2ir6n-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcL2I3ZDVlODgzLWJiMTQtNDQ0Yi05MDljLWU5N2MxMjM5NmZkM1wvZGYyaXI2bi04ZmYzZWM3Yy0zOWNmLTRkMjAtODcwZi1lYjcyZjZiZGRmNTguanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0MCAGV4o26bHbyIiNiKXIsnmEyjOXKt3JT4JCHxT5Kg',
}


const ProjectDetail = () => {
    const [project, setProject] = useState(dummy)
    const [voteValue, setVoteValue] = useState('')
    
    const handleVote = () => {
        setProject({
            ...project,
            votes: (parseInt(project.votes) + parseInt(voteValue)).toString(),
        })
        setVoteValue('')
    }

    const voteSection = useRef(null)

    const scrollToVote = () => {
        window.scrollTo({
            top: voteSection.current.offsetTop,
            behavior: 'auto',
        });
    }

    return (
        <div className='w-full min-h-screen bg-midnight lg:px-10 py-8'>
            {/* Project Heading */}
            <div className='w-full flex flex-col items-center lg:items-stretch lg:flex-row gap-x-4'>
                {/* Avatar */}
                <img src={project.coverImage} className='w-32 h-32 lg:flex-1 lg:h-[40vh] rounded gap-y-4 lg:gap-y-0' alt='Project Cover'/>

                {/* Project Info */}
                <div className='flex flex-col lg:flex-row lg:justify-between items-center lg:items-stretch w-full lg:flex-[3] gap-y-4 lg:gap-y-0'>
                    {/* Info */}
                    <div className='flex flex-col justify-between items-center lg:items-stretch'>
                        <div className='flex flex-col items-center lg:items-start'>
                            <h1 className='text-3xl text-white font-bold capitalize'>{project.name}</h1>
                            <p className='text-md text-disable font-regular capitalize'>{project.company}</p>
                        </div>
                        <div className='flex flex-col items-center lg:items-start'>
                            <p className='text-md text-primary font-regular capitalize'>{project.assetType}</p>
                            <p className='text-md text-primary font-regular capitalize'>{project.votes} votes</p>
                        </div>
                    </div>
                    
                    {/* Interactions */}
                    <div className='flex flex-col justify-between items-center lg:items-stretch'>
                        <div className='flex flex-col items-center lg:items-start'>
                            <h1 className='text-md text-white font-bold uppercase'>Ends in</h1>
                            <p className='text-md text-disable font-regular capitalize'>{project.duration}</p>
                        </div>
                        <div>
                            <button 
                                className='text-md text-white bg-primary hover:bg-secondary font-regular uppercase py-2 px-4 rounded my-4 lg:my-0'
                                onClick={scrollToVote}
                            >
                                vote
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Details */}
            <div className='w-full my-8 flex flex-col gap-y-4 px-4 lg:px-0'>
                <h1 className='text-3xl font-bold text-gradient uppercase'>Details</h1>
                {/* Summary */}
                <div className='flex flex-col gap-y-2'>
                    <h2 className='text-xl text-white font-medium capitalize'>Project summary</h2>
                    <p className='text-sm font-regular text-disable'>{project.summary}</p>
                </div>
                
                {/* Allocation */}
                <div className='flex flex-col gap-y-2'>
                    <h2 className='text-xl text-white font-medium capitalize'>allocation detail</h2>
                    <div className='flex lg:w-1/2 justify-between'>
                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm font-regular text-disable'>Minimum Allocation</p>
                            <p className='text-sm font-regular text-disable'>Maximum Allocation</p>
                            <p className='text-sm font-regular text-disable'>Token Price Allocation</p>
                        </div>

                        <div className='flex flex-col gap-y-2'>
                            <p className='text-sm font-regular text-primary'>{project.min} {project.assetType}</p>
                            <p className='text-sm font-regular text-primary'>{project.max} {project.assetType}</p>
                            <p className='text-sm font-regular text-primary'>1 {project.assetType} = {project.price}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Voting */}
            <div className='w-full my-8 flex flex-col gap-y-4 px-4 lg:px-0 py-4'>
                <h1 className='text-3xl font-bold text-gradient uppercase'>VOTE NOW</h1>

                <div className='flex lg:w-1/2 justify-between'>
                    <div className='flex flex-col gap-y-2'>
                        <p className='text-sm font-regular text-disable'>ARP on Vote</p>
                        <p className='text-sm font-regular text-disable pt-4'>Vote Amount</p>
                        
                    </div>

                    <div className='flex flex-col gap-y-2' ref={voteSection}>
                        <p className='text-sm font-regular text-primary'>{project.arp} %</p>
                        <div className='flex'>
                            <input 
                                className='w-28 lg:w-auto border-2 border-primary rounded-l bg-transparent text-white text-sm font-regular py-2 px-4' 
                                placeholder='0.00' 
                                value={voteValue} 
                                onChange={(e) => setVoteValue(e.target.value)}
                            />
                            <button 
                                className='bg-primary text-white text-sm font-regular rounded-r py-2 px-4 uppercase' 
                                onClick={() => setVoteValue(99999.9)}
                            >
                                max
                            </button>
                        </div>

                    </div>
                </div>

                <button className='lg:w-64 rounded my-4 px-4 py-2 bg-primary hover:bg-secondary text-white text-md' onClick={handleVote}>Confirm vote</button>
            </div>
        </div>
    )
}

export default ProjectDetail