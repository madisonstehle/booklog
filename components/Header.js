import { useState } from 'react';
import Link from 'next/link';

import Hamburger from '../components/Hamburger.js';

export default function Header(){
    const [ menuStatus, setMenuStatus ] = useState(false);
  
    const linkStyle = 'block m-2 text-lg py-5 pl-5 cursor-pointer font-serif hover:text-yellow-800'

    const burgerStyle = 'w-8 h-1 mx-1 bg-black my-1 rounded-full';

    const menuItems = (
        <div className='my-10 py-5'>
            <Link href='/'>
                <a className={linkStyle}>
                    Dashboard
                </a>
            </Link>
            <Link href='/log'>
                <a className={linkStyle}>
                    Booklog
                </a>
            </Link>
            <Link href='/add'>
                <a className={linkStyle}>
                    Add a Book
                </a>            
            </Link>
            <Link href='/logout'>
                <a className={linkStyle}>
                    Log Out
                </a>            
            </Link>
        </div>
    );
  
    return(
      <div className="flex w-screen fixed top-0 justify-end z-30 bg-white shadow-md">

        <div className="flex flex-grow justify-start items-center ml-2">
            <Link href='/'> 
              <a className="text-2xl font-serif cursor-pointer">
                Booklog
              </a>
            </Link>
        
        </div>

        <div>
            <button
                onClick={() => {setMenuStatus(true)}}
                className={`flex-col text-lg p-2 text-highlight rounded-md hover:bg-accentTwo hover:bg-opacity-20 text group-hover:bg-accent hover:text-accent transform ${
                menuStatus
                    ? 'origin-top-left translate-y-1 ease transtion-all duration-1000'
                    : ' scale-1 ease transition-all duration-1000'
            }`}>
                <div className={burgerStyle}></div>
                <div className={burgerStyle}></div>
                <div className={burgerStyle}></div>     
            </button>

            <Hamburger 
                closeMenu={() => setMenuStatus(!menuStatus)}
                menuStatus={ menuStatus }> 
                { menuItems }
            </Hamburger>
        </div>

      </div>
    )
  }