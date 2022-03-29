import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaDiscord, FaGlobe } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const data = [
    {
        title: 'Project 1',
        votes: '114,213',
        arp: '27',
        type: 'LEMA',
        coverImg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29e17cf4-4459-4cf7-969f-b3019d639bc4/df2arl4-1fbeed52-a133-4e1d-bb13-d19e271835eb.jpg/v1/crop/w_275,h_350,x_0,y_0,scl_0.11458333333333,q_70,strp/cover_for_book_by_bayardwu_df2arl4-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjA0MCIsInBhdGgiOiJcL2ZcLzI5ZTE3Y2Y0LTQ0NTktNGNmNy05NjlmLWIzMDE5ZDYzOWJjNFwvZGYyYXJsNC0xZmJlZWQ1Mi1hMTMzLTRlMWQtYmIxMy1kMTllMjcxODM1ZWIuanBnIiwid2lkdGgiOiI8PTE2MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.O3YUoArC2eG01q0P-mCAMUMubf1uVNImhRYbKsfhRP4',
    },
    {
        title: 'Project-E01',
        votes: '554,213',
        arp: '29',
        type: 'LEMA/USDT',
        coverImg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d64b3e7f-32dc-4f62-b099-ac48f59a476b/df2any5-b0bad663-29bf-4fb7-b5e4-74d5aa3fe919.png/v1/fill/w_173,h_250,q_70,strp/hallway_layout_by_anirysel_df2any5-250t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTg1MiIsInBhdGgiOiJcL2ZcL2Q2NGIzZTdmLTMyZGMtNGY2Mi1iMDk5LWFjNDhmNTlhNDc2YlwvZGYyYW55NS1iMGJhZDY2My0yOWJmLTRmYjctYjVlNC03NGQ1YWEzZmU5MTkucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.XiDIwypekWfWIVV-EFtXfVVoTtkjHp7Mk7fC4xKjifs',
    },
    {
        title: 'Ri01',
        votes: '4,213',
        arp: '9',
        type: 'LEMA/USDT',
        coverImg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ec39fed-07a4-4b87-9034-2d3e9609fb65/df2a3ar-3ccdb61f-ea66-4795-9a0d-2cfedfeea9f4.png/v1/fill/w_622,h_350,q_70,strp/oasis_of_existence_by_rayleighscale_df2a3ar-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMmVjMzlmZWQtMDdhNC00Yjg3LTkwMzQtMmQzZTk2MDlmYjY1XC9kZjJhM2FyLTNjY2RiNjFmLWVhNjYtNDc5NS05YTBkLTJjZmVkZmVlYTlmNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.fIR_IzN4oWK3xhCjuJTkp7wUj9B269uz-qxcLRDEbb0',
    },
    {
        title: 'Adios',
        votes: '41,213',
        arp: '15',
        type: 'LEMA',
        coverImg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ec39fed-07a4-4b87-9034-2d3e9609fb65/df2a3ar-3ccdb61f-ea66-4795-9a0d-2cfedfeea9f4.png/v1/fill/w_622,h_350,q_70,strp/oasis_of_existence_by_rayleighscale_df2a3ar-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMmVjMzlmZWQtMDdhNC00Yjg3LTkwMzQtMmQzZTk2MDlmYjY1XC9kZjJhM2FyLTNjY2RiNjFmLWVhNjYtNDc5NS05YTBkLTJjZmVkZmVlYTlmNC5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.fIR_IzN4oWK3xhCjuJTkp7wUj9B269uz-qxcLRDEbb0',
    },
]

const ProjectCard = () => {
    let navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/project/1')
    }
  return (
    <div className='w-11/12 md:w-full flex flex-col sm:flex-row justify-start flex-wrap gap-5 my-4'>
        {data.map((project, index) => (
            <div className='flex flex-col md:w-[45%] lg:flex-row lg:w-[450px] lg:h-[220px] rounded bg-night p-5' key={index} onClick={handleNavigate}>
                {/* Image */}
                <img className='flex-0.5 w-full h-36 lg:w-36 lg:h-full object-cover rounded' src={project.coverImg} alt="CoverImage"/>

                {/* Details and Social */}
                <div className='w-full flex flex-col py-4 lg:py-0 lg:flex-row justify-between'>
                    {/* Details */}
                    <div className='lg:flex-1 w-full flex flex-col items-center lg:justify-between lg:items-start lg:mx-3'>
                        {/* ProjectTitle */}
                        <div>
                            <h1 className='text-xl font-semibold text-white'>{project.title}</h1>
                            <p className='text-sm text-primary'>{project.votes} Votes</p>
                        </div>
                        {/* OtherDetail */}
                        <div>
                            <p className='text-sm text-white'>ARP on Vote: <span className='text-lg text-primary'>{project.arp}%</span></p>
                            <br />
                            {/* Type */}
                            <div className='px-4 py-1 gradient-bg text-center rounded text-sm'>
                                {project.type}
                            </div>
                        </div>
                    </div>

                    {/* Social */}
                    <div className='flex-0.25 flex flex-row lg:flex-col pt-4 px-4 justify-between items-center'>
                        <AiOutlineTwitter className='text-disable text-xl hover:text-[#1DA1F2]'/>
                        <FaFacebookF className='text-disable text-xl hover:text-[#3B5998]'/>
                        <FaDiscord className='text-disable text-xl hover:text-[#7289DA]'/>
                        <FaGlobe className='text-disable text-xl hover:text-white'/>
                    </div>
                </div>
            </div>   
        ))}
    </div>
  )
}

export default ProjectCard