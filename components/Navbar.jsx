import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'
import {BsMoon} from "react-icons/bs"
import {BiSun} from "react-icons/bi"

const Navbar = () => {
  const {darkMode, setDarkMode} = useContext(ThemeContext)
  return (
    <nav className={`min-w-[375px] xl:mx-auto flex justify-between py-5 px-3 md:px-14 ${darkMode? 'bg-[#2b3945] text-white': 'bg-white'}`}> 
        <h2 className='font-bold'>Where in the World?</h2>
        <div className='flex items-center gap-2 cursor-pointer' onClick={()=>setDarkMode(!darkMode)}>
            {darkMode ? <BiSun /> : <BsMoon />}
            {darkMode ? <p className='text-sm'>Light Mode</p> : <p className='text-sm'>Dark Mode</p>}
        </div>
    </nav>
  )
}

export default Navbar