import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import DownArrow from '../assets/icons/DownArrow';
import { Rotate as Hamburger } from 'hamburger-react'

import logo from '../assets/lemmatronLogo.png';
import Popup from './Popup';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

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

  const handleActiveResponsive = (curr) => {
    if(currentLocation ===  curr) {
      return `bg-primary text-white text-xl rounded w-full px-4 py-2`;
    }
    else{
      return `text-white bg-transparent w-full px-4 py-2`;   
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
      <nav className="flex gap-10 justify-between lg:justify-start items-center w-full h-14 bg-midnight md:p-10 p-5">
        {/* LogoContainer */}
        <div className='w-16'>
          <img src={logo} alt="logo" className="w-full h-full object-cover" />
        </div>

        {/* TabsContainer */}
        <div className='w-11/12 hidden lg:flex justify-center gap-x-20 ml-32 items-center'>
          <Link to="/"><h3 className={getActive('/')}>Projects</h3></Link>
          <Link to="/stakes"><h3 className={getActive('/stakes')}>Stakes</h3></Link>
        </div>

        {/* WalletContainer */}
        <div className='w-1/5 hidden lg:flex items-center gap-10 bg-slate-200 text-white text-sm'>
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

        {/* Responsive Nav */}
        <div className='lg:hidden'>
          <Hamburger toggled={toggleMenu} toggle={setToggleMenu}/>
          
          {/* Menu */}
          {
            toggleMenu &&
            (
              <div className='h-screen w-full md:w-[50vw] fixed z-10 top-0 -right-2 p-3 pr-8 white-glassmorphism flex flex-col items-end animate-slide-in'>
                <Hamburger toggled={toggleMenu} toggle={setToggleMenu}/>
                <ul className='w-full flex flex-col list-none my-14 items-start gap-y-4'>
                  <li className={handleActiveResponsive('/')}><Link to='/'>Projects</Link></li>
                  <li className={handleActiveResponsive('/stakes')}><Link to='/stakes'>Stake</Link></li>
                </ul>

                {/* Connect */}                
                {
                  !isConnected ? 
                  (
                    <div className='w-full text-center py-2 border-2 border-primary rounded bg-transparent text-primary' onClick={() => setOpen(true)}>
                        CONNECT
                    </div>
                  )
                  :
                  (
                    <div className='w-full text-center py-2 border-2 border-primary rounded bg-transparent text-primary'>
                        DISCONNECT
                    </div>
                  )
                }
              </div>
            )
          }
        </div>
      </nav>
      
      <div className='absolute top-0'>
        {open && <Popup handleClick={() => setOpen(false)} connectMeta={handleConnect} />}
      </div>
    </>
  )
}

export default Navbar