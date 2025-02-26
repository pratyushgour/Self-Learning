import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHelicopter } from '@fortawesome/free-solid-svg-icons';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-500 text-left p-8'>
        <h1 className='font-bold text-2xl'>Filter</h1>

        {/* Flight type  */}

        <div className='pt-5'>
          <h1 className='text-lg font-semibold '>Flight type</h1>
          <div className='w-full border-white border-t-2 h-1 my-5'>
          </div>
          <div className='flex justify-between'>
            <div className='flex flex-col w-[45%] m'>
              <label htmlFor="Departure">Departure time</label>
              <input 
              type="text"
              placeholder='10:00'
              className='mt-2 rounded-xl h-10 p-3'
              />
            </div>
            <div className='flex flex-col w-[45%]'>
              <label htmlFor="Departure">Arrival time</label>
              <input 
              type="text"
              placeholder='15:30'
              className='mt-2 rounded-xl h-10 p-3'
              />
            </div>
          </div>
        </div>
        {/* Flight type ends */}

        {/* Aircraft model  */}

        <div className='flex flex-col mt-7 '>
          <h1 className='text-lg font-semibold'>Aircraft model</h1>
          <div className='mt-5 flex justify-between'>

            <div className='bg-white h-[100px] w-[20%] flex flex-col rounded-2xl items-center justify-center'>
              <FontAwesomeIcon icon={faPlane} className='font-xl size-5 mb-2'/>
              <p>Boeing</p>
            </div>

            <div className='bg-white h-[100px] w-[40%] flex flex-col rounded-2xl items-center justify-center'>
              <FontAwesomeIcon icon={faPlane} className='font-xl size-5 mb-2'/>
              <p>Airbus Model</p>
            </div>

            <div className='bg-white h-[100px] w-[20%] flex flex-col rounded-2xl items-center justify-center'>
            <FontAwesomeIcon icon={faHelicopter} className='font-xl size-5 mb-2'/>
              <p>Helicopter</p>
            </div>
          </div>
        </div>
        {/* Aircraft model ends  */}

        {/* Flight crew details  */}

        <div className='flex flex-col mt-7 '>
          <h1 className='text-lg font-semibold'>Flight crew details</h1>
          <div className='mt-5 flex justify-between'>
            <div className='w-[45%] flex justify-between'>
              <div className='flex flex-col w-[44%]'>
                <label className='mb-3' htmlFor="">Pilots</label>
                <input 
                type="text"
                placeholder='150' 
                className='rounded-xl h-10 px-2'
               />
              </div>
              <div className='flex flex-col w-[44%]'>
                <label className='mb-3' htmlFor="">Crew members</label>
                <input 
                type="text"
                placeholder='2' 
                className='rounded-xl h-10 px-2'
               />
              </div>
            </div>
            <div className='flex flex-col w-[45%]'>
              <p className='mb-3'>Seating configuration</p>

              <div className='flex items-center h-10 justify-between'>
                <div className='flex items-center'>
                  <input 
                  type="checkbox" 
                  id='ecomomySeat'
                  className='mr-2 size-4'
                  />
                  <label htmlFor="economySeat">Economy</label>
                </div>

                <div className='flex items-center'>
                  <input 
                  type="checkbox" 
                  id='ecomomySeat'
                  className='mr-2 size-4'
                  />
                  <label htmlFor="economySeat">Business</label>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Flight crew details ends */}

        {/* First class  */}

        <div className='flex flex-col mt-7'>
          <h1 className='text-lg font-semibold'>First class</h1>
          <div className='mt-5 flex'>
            <div className='flex items-center'>
              <input 
              type="checkbox" 
              id='ecomomySeat'
              className='mr-2 size-4'
              />
              <label htmlFor="economySeat">Emergency</label>
            </div>
            <div className='flex items-center mx-16'>
              <input 
              type="checkbox" 
              id='ecomomySeat'
              className='mr-2 size-4'
              />
              <label htmlFor="economySeat">In-flight</label>
            </div>
            <div className='flex items-center'>
              <input 
              type="checkbox" 
              id='ecomomySeat'
              className='mr-2 size-4'
              />
              <label htmlFor="economySeat">Communic</label>
            </div>
          </div>
        </div>

        {/* First class ends  */}

        {/* buttons  */}

        <div className='mt-10 flex justify-between'>
          <button className='text-lg font-semibold w-[30%] text-left rounded-2xl py-3 pl-3'>
            Reset
          </button>
          <button className='text-lg font-semibold w-[40%] text-center bg-white rounded-3xl py-3'>
            Apply changes
          </button>
        </div>


      </div>
    </>
  )
}

export default App
