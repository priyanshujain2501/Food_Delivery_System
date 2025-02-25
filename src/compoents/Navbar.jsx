import React, { useContext, useState } from 'react'
import NavbarIcon from '../assets/NavbarIcon.webp'
import {assets} from '../assets/assets2.js'
import {Link, useNavigate } from 'react-router-dom';
import { Context } from '../context/Context.jsx';

function Navbar({setShowLogin}) {

    const navigate = useNavigate();

    const [check,setCheck] = useState(false);

    const {getCartTotalAmt} = useContext(Context);
    
    
    const handleMenuBtn = () => {

        if(location.pathname === '/'){

            const targetElement = document.getElementById('explore-menu')

            if(targetElement){
                targetElement.scrollIntoView()
            }

        }
        else{

            navigate('/')

            setTimeout(()=> {
                const targetElement = document.getElementById('explore-menu')

                if (targetElement) {
                    targetElement.scrollIntoView()
                }

            },100)

        }

    }

    const handleMobileViewBtn = () => {

        if(location.pathname === '/'){

            const targetElement = document.getElementById('app-download')

            if(targetElement){
                targetElement.scrollIntoView()
            }

        }
        else{

            navigate('/')

            setTimeout(()=> {
                const targetElement = document.getElementById('app-download')

                if (targetElement) {
                    targetElement.scrollIntoView()
                }

            },100)

        }

    }

    const handleContactBtn = () => {

        if(location.pathname === '/'){

            const targetElement = document.getElementById('footer')

            if(targetElement){
                targetElement.scrollIntoView()
            }

        }
        else{

            navigate('/')

            setTimeout(()=> {
                const targetElement = document.getElementById('footer')

                if (targetElement) {
                    targetElement.scrollIntoView()
                }

            },100)

        }

    }

  return (
    <div className='w-full flex items-center justify-between px-2 py-4 lg:px-12 text-black text-semibold'>
        
        <div onClick={() => navigate('/')} className='flex gap-2 items-center'>

            <img src={NavbarIcon} className='flex items-center w-8 h-8 sm:w-14 sm:h-14 rounded-full hover:cursor-pointer hover:scale-105 duration-500'/>

            <div className='flex items-center text-medium sm:text-2xl font-bold hover:cursor-pointer shrink-0 hover:scale-105 duration-500 hover:text-orange-500'>Food Delivery System</div>

        </div>

        <div className='hidden md:block'>

            <ul className='flex items-center flex-row gap-3 text-lg px-2 lg:px-4 hover:cursor-pointer'>

                <Link to='/' className='hover:text-orange-500 hover:scale-105 duration-500'>
                    Home
                    <hr className='m-auto w-4/5 bg-orange-500 hidden h-1'/>
                </Link>

                <button onClick={handleMenuBtn} className='hover:text-orange-500 hover:scale-105 duration-500'>
                    Menu
                    <hr className='bg-orange-500  m-auto w-4/5 hidden h-1' />
                </button>

                <button onClick={handleMobileViewBtn} className='hover:text-orange-500 hover:scale-105 duration-500'>
                    MobileView
                    <hr className='bg-orange-500  m-auto w-4/5 hidden h-1' />
                </button>
                 
                <button onClick={handleContactBtn} className='hover:text-orange-500 hover:scale-105 duration-500'>
                    Contact
                    <hr className='bg-orange-500  m-auto w-4/5 hidden h-1' />
                </button>

            </ul>

        </div>
        
        <div className='flex items-center justify-center gap-4 lg:gap-6'>

            {/* <img src={assets.search_icon} 
            className='cursor-pointer' /> */}

            <div className='relative'>
                <Link to='/cart' ><img src={assets.basket_icon} className='cursor-pointer min-w-6 min-h-6' /></Link>
                <div className={`${getCartTotalAmt() === 0 ? "hidden" : "block"} absolute min-w-2.5 min-h-2.5 bg-orange-500 rounded-full top-[-10px] right-[-10px]`}></div>
            </div>

            <button onClick={()=>setShowLogin(true)} className='bg-transparent text-lg border border-orange-200 text-gray-black rounded-full px-4 py-1 hover:bg-orange-500 shrink-0'>sign in</button>

        </div>

    </div>
  )
}

export default Navbar