import React from 'react'
import Button from './components/Button'
import {  Link} from "react-router";

const App = () => {
  return (
    <div>
      <div className='inset-0 -z-10 fixed'>
      <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
      </div>

      <div className='flex justify-center items-center flex-col w-full h-lvh '>
        <h1 className='text-black lg:text-8xl mb-5 font-semibold'>Welcome to quiz</h1>
        <h1 className='text-4xl'><span className='bg-gradient-to-r from-red-300 to-lime-400 bg-clip-text text-transparent '>Topic</span> : Genetics & Evolution</h1>
        <div className='pt-2 mt-5 '>

    <Link to={'/quiz-form'}>
        <button type="button" class="text-white bg-blue-700 hover:bg-emerald-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-emerald-700 dark:focus:ring-blue-800">
          Let's Start the Quiz
          <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
          </button>
          </Link>
        </div>
      </div>


    </div>
  )
}

export default App