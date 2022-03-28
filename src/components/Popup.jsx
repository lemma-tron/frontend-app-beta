import React from 'react'
import metamask from '../assets/MetaMask_Fox.png'
import coinbase from '../assets/coinbase.png'
import binance from '../assets/binance.png'

const Popup = ({ handleClick, connectMeta }) => {
    return (
        <div className='fixed z-10 w-full h-screen opacity-bg flex justify-center items-center' onClick={handleClick}>
            <div className='w-full z-99 flex flex-col items-center m-4 md:w-auto md:m-0 white-glassmorphism px-10 py-8'>
                <h1 className='text-white text-2xl font-bold'>CONNECT WALLET</h1>
                <div className='mt-10'>
                    {/* Metamask */}    
                    <div className='my-2 flex items-center'>
                        <img src={metamask} alt="MetaMask" className="w-10 h-10 object-cover" />
                        <p className='text-white pl-4' onClick={connectMeta}>Metamask</p>
                    </div>  
                    {/* Coinbase */}
                    <div className='my-2 flex items-center'>
                        <img src={coinbase} alt="MetaMask" className="w-10 h-10 object-cover" />
                        <p className='text-white pl-4'>Coinbase</p>
                    </div>  
                    {/* Binance */}
                    <div className='my-2 flex items-center'>
                        <img src={binance} alt="MetaMask" className="w-10 h-10 object-cover" />
                        <p className='text-white pl-4'>Binance</p>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Popup