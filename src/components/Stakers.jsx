import React, { useState } from 'react'
import { RiQuestionMark } from 'react-icons/ri'

import AboutStakers from './AboutStakers'

const headersValidator = [ "assets", "apy rate", "available", "deposit", "withdraw" ]
const assetsValidator = [
    {
        name: 'LEMA',
        apy: '40',
        available: '0.00',
    },
    {
        name: 'LEMA/USDT',
        apy: '35',
        available: '0.00',
    }
]

const headersNominator = [ "validator", "apy rate", "available", "deposit", "withdraw" ]
const assetsNominator = [
    {
        name: '0x7...1kv',
        apy: '40',
        available: '0.00',
    },
    {
        name: '0B8....J19',
        apy: '35',
        available: '0.00',
    },
    {
        name: '0x1....99A',
        apy: '37',
        available: '0.00',
    },
]

const Table = ({assetsProps, headerProp}) => (
    <table className=' w-full border-collapse'>
        <tr>
            {headerProp.map(header => (
                <th className='text-sm font-thin text-disabled text-center uppercase p-[8px]'>{header}</th>
            ))}
        </tr>
        <br />
        <br />
        
        {
            assetsProps.map((asset, index) => (
                <>
                    <tr className='font-semibold text-lg' key={index}>
                        <td className='p-[8px]'>{asset.name}</td>
                        <td className='p-[8px]'>{asset.apy} %</td>
                        <td className='p-[8px]'>{asset.available}</td>
                        <td className='p-[8px]'>
                            <div className='flex justify-center'>
                                <input className='px-2 py-2 border-primary border-2 bg-transparent rounded-l text-sm font-light' placeholder='0.00' />
                                <button className='gradient-bg text-sm px-4 text-black rounded-r'>APPROVE</button>
                            </div>
                        </td>
                        <td className='p-[8px]'>
                            <div className='flex justify-center'>
                                <input className='px-2 py-2 border-primary border-2  bg-transparent rounded-l text-sm font-light' placeholder='0.00' />
                                <button className='gradient-bg text-sm px-4 text-black rounded-r'>APPROVE</button>
                            </div>
                        </td>
                    </tr>
                    <br />
                </>
            ))
        }

    </table>
)



const Stakers = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='w-11/12 mx-4 md:w-full md:mx-0'>
                <div className='w-full flex justify-between'>
                    <h1 className='text-3xl font-bold text-gradient uppercase'>become a validator</h1>
                    <div className='rounded-full w-6 h-6 bg-night flex items-center justify-center'>
                        <RiQuestionMark className='text-midnight' onClick={() => setOpen(true)}/>
                    </div>
                </div>
                <div className='w-full my-4 bg-night rounded p-4 overflow-x-auto'>
                    <Table headerProp={headersValidator} assetsProps={assetsValidator}/>
                </div>

                <br />

                <div className='w-full flex justify-between'>
                    <h1 className='text-3xl font-bold text-gradient uppercase'>become a nominator</h1>
                    <div className='rounded-full w-6 h-6 bg-night flex items-center justify-center'>
                        <RiQuestionMark className='text-primary' onClick={() => setOpen(true)}/>
                    </div>
                </div>
                <div className='w-full my-4 bg-night rounded p-4 overflow-x-auto'>
                    <Table headerProp={headersNominator} assetsProps={assetsNominator}/>
                </div>

            </div>

            <div className='absolute top-0'>
                {open && <AboutStakers handleClick={() => setOpen(false)}/>}
            </div>
        </>
    )
}

export default Stakers