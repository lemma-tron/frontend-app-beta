import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import DownArrow from '../assets/icons/DownArrow';

import logo from '../assets/lemmatronLogo.png';
import Popup from './Popup';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  let location = useLocation();
  let currentLocation = location.pathname;
    
  const getActive = (curr) => {
      if(currentLocation ===  curr) {
        return `text-primary`;
      }
      else{
        return `text-white`;   
      }
  }

  // wallet
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    if(window.ethereum) {
      window.ethereum.enable().then(() => {
        setIsConnected(true);
      });
    }
    else {
      setIsConnected(false);
    }
  }

  return (
    <>
      <div className="flex gap-10 items-center w-full h-14 bg-midnight md:p-10 p-5">
        {/* LogoContainer */}
        <div className='w-16'>
          <img src={logo} alt="logo" className="w-full h-full object-cover" />
        </div>

        {/* TabsContainer */}
        <div className='w-11/12 hidden md:flex justify-center gap-x-20 ml-32 items-center'>
          <Link to="/"><h3 className={getActive('/')}>Projects</h3></Link>
          <Link to="/stakes"><h3 className={getActive('/stakes')}>Stakes</h3></Link>
        </div>

        {/* WalletContainer */}
        <div className='w-1/5 hidden md:flex items-center gap-10 bg-slate-200 text-white text-sm'>
          {/* Currency */}
          <div className='flex items-center gap-2'>
              USD
              {/* DropIcon */}
              <DownArrow classProps='h-3 w-3'/>
          </div>

          {/* Connect to Wallet */}
          {
            !isConnected ? 
            (
              <div className='px-6 py-2 border-2 border-primary rounded bg-transparent text-primary' onClick={() => setOpen(true)}>
                  CONNECT
              </div>
            )
            :
            (
              <div className='px-6 py-2 border-2 border-primary rounded bg-transparent text-primary'>
                  DISCONNECT
              </div>
            )
            
          }
        </div>
      </div>
      
      <div className='absolute top-0'>
        {open && <Popup handleClick={() => setOpen(false)} connectMeta={handleConnect} />}
      </div>
    </>
  )
}

export default Navbar