import React, { useState } from 'react'
import { RxCrossCircled } from "react-icons/rx";

function LoginPopup({setShowLogin}) {

    const [currState,setCurrState] = useState("Login")

    return (
        <div className='absolute z-10 w-full h-screen bg-[#00000090] grid place-items-center'>

            <form className=' text-[#808080] animate-fadeIn w-80 h-[48%] flex flex-col bg-white p-5 space-y-4 rounded-lg mb-36 md:mb-16'>

                {/* Heading and cancel */}  
                <div className='flex justify-between'>
                    
                    <h2 className='text-xl text-black font-semibold'>{currState}</h2>

                    <RxCrossCircled onClick={() => setShowLogin(false)} className='w-7 h-7 text-black cursor-pointer'/>

                </div>

                <div className='flex flex-col w-full gap-4'>
                {
                        currState === "Login" ? <></> : <input type="text" placeholder='Your Name' className='pl-1 border border-gray-400 py-1 rounded-sm text-sm'/>
                }
                    <input type="email" placeholder='Your email' className='pl-1 border border-gray-400 py-1 rounded-sm text-sm'/>
                    
                    <input type="password" placeholder='Password' className='pl-1 border border-gray-400 py-1 rounded-sm text-sm'/>

                </div>

                <div>
                    <button className='bg-orange-500 w-full text-white py-1 sm:py-2 rounded-md cursor-pointer'>{currState==="Sign Up"?"Create account":"Login"}</button>
                </div>

                <div className='flex items-start gap-2 mt-[-15px]'>
                    <input type="checkbox" className='mt-[5px] cursor-pointer'/>
                    <p className='text-xs sm:text-sm '>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>

                <div>
                    {
                        currState==="Login"
                        ? <p>Create a new account? <span onClick={() => setCurrState("Sign Up")} className='cursor-pointer text-orange-500'>Click here</span></p>
                        : <p>Already have an account? <span onClick={()=>setCurrState("Login")} className='cursor-pointer text-orange-500'>Login here</span></p>
                    }
                </div>

            </form>

        </div>
    )
}

export default LoginPopup