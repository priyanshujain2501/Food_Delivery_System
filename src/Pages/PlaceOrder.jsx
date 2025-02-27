import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom'

function PlaceOrder() {

  const { getCartTotalAmt, discountedAmt } = useContext(Context)

  const navigate = useNavigate();

  return (
    <div className='w-full'>

      <form onSubmit={(e) => e.preventDefault()} className='w-10/12 md:w-9/12 mx-auto mt-10 flex flex-col sm:flex-row items-start justify-between gap-6'>

        {/* left */}
        <div className='w-full sm:w-1/2 lg:w-full md:max-w-[max(30%,500px)] '>

          <p className='font-semibold text-2xl mb-10'>Delivery Information</p>

          <div className='flex gap-2.5'>
            <input type="text" placeholder='First name' className='mb-3 w-full border border-[#c5c5c5] outline-orange-500 p-2'/>
            <input type="text" placeholder='Last name' className='mb-3 w-full border border-[#c5c5c5] outline-orange-500 p-2' />
          </div>

          <input type="text" placeholder='Email address' className='mb-3 w-full border border-[#c5c5c5] outline-orange-500 p-2' />
          <input type="text" placeholder='Street' className='mb-3 w-full border border-[#c5c5c5] outline-orange-500 p-2' />

          <div className='flex gap-2.5'>
            <input type="text" placeholder='City' className='mb-3 w-full border border-[#c5c5c5] outline-orange-500 p-2' />
            <input type="text" placeholder='State' className='mb-3 w-full border border-[#c5c5c5] outline-orange-500 p-2' />
          </div>

          <div className='flex gap-2.5'>
            <input type="Number" placeholder='Zip code' className='mb-3 w-full border border-[#c5c5c5] outline-orange-500 p-2' />
            <input type="text" placeholder='Country' className='mb-3 w-full border border-[#c5c5c5] outline-orange-500 p-2'/>
          </div>

          <input type="telephone" placeholder='Phone' className='mb-3 w-full border border-[#c5c5c5] outline-orange-500 p-2' />

        </div>

        {/* right */}
        <div className='flex-1 flex flex-col  gap-5 w-full max-w-[max(40%,500px)]'>

          <h2 className='text-md sm:text-2xl font-semibold'>Cart Totals</h2>

          <div className=''>

            <div className='flex justify-between'>
              <p>Subtotal</p>
              <p>${getCartTotalAmt()}</p>
            </div>

            <hr className='my-2.5' />

            <div className='flex justify-between'>
              <p>Delivery Fee</p>
              <p>${getCartTotalAmt()===0? 0 : 2}</p>
            </div>

            <hr className='my-2.5' />

            <div className={`justify-between ${discountedAmt === 0 ? "hidden" : "flex"}`}>
              <p>Promo</p>
              <p>${discountedAmt === 0 ? "" : discountedAmt}</p>
            </div>

            <hr className={`my-2.5 ${discountedAmt === 0 ? "hidden" : "block"}`} />

            <div className='flex justify-between'>
              <b>Total</b>
              <b>${getCartTotalAmt()===0? 0 : getCartTotalAmt() + 2 - discountedAmt}</b>
            </div>

          </div>

          <div className='flex justify-between w-full'>

            <a href="/" className='flex justify-center text-center  text-white bg-orange-500 px-3 py-2 sm:py-3 text-xs mt-7'>
              PROCCED TO PAYMENT
            </a>

            <button onClick={() => navigate("/splitbill")} className='text-white bg-orange-500 py-2 sm:py-3 px-3 text-xs mt-7'>SPLIT BILL</button>

          </div>

        </div>

      </form>

    </div>
  )
}

export default PlaceOrder