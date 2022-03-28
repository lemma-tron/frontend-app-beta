import React from 'react'

const Popup = ({ handleClick }) => {
    return (
        <div className='fixed z-10 w-full h-screen opacity-bg flex justify-center items-center' onClick={handleClick}>
            <div className='w-full z-99 flex flex-col items-center m-4 md:w-1/2 md:m-0 white-glassmorphism px-10 py-8'>
                <h1 className='text-white text-2xl font-bold uppercase'>What are validators and nominators</h1>
                <div className='mt-10'>
                    <p>
                        <b>Validators</b> are those who holds the right to vote in the projects. They have huge roles and responsibilities. 
                        Also, they earn more than nominators because of the higher responsibility.
                    </p>
                    <br />
                    <p>
                        <b>Nominators</b> are those who do not hold the right to vote in the projects. They nominate a validator to vote for 
                        them and have to pay certain amount to volunteers as a reward. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Popup