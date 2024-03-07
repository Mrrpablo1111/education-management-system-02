import React from 'react'
import Image from 'next/image'
import logo from "../../../public/logotest.png"

const NavbarUi = () => {
  return (
    <header className='border-b bg-white font-sans min-h-[60px]'>
    <div className='flex flex-wrap items-center justify-between px-10 py-3 gap-4 relative'>
      <a href="javascript:void(0)"><Image src={logo} alt="logo" className='w-36' />
      </a>
      <div className='flex items-center max-lg:ml-auto lg:order-1'>
        
        
        
        <button id="toggle" className='lg:hidden ml-7'>
          <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <ul id="collapseMenu" className='lg:!flex max-lg:hidden max-lg:w-full lg:space-x-10 max-lg:space-y-4 max-lg:my-4'>
        <li className='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
            className='hover:text-blue-600 text-[15px] font-bold text-blue-600 block'>Home</a></li>
        <li className='group max-lg:border-b max-lg:py-2 relative'>
          <a href='javascript:void(0)'
            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block'>Pages<svg
              xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16" data-original="#000000" />
            </svg>
          </a>
          <ul
            className='absolute hidden group-hover:block shadow-lg bg-white px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50'>
            <li className='border-b py-2 '><a href='javascript:void(0)'
                className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>About</a></li>
            <li className='border-b py-2 '><a href='javascript:void(0)'
                className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Contact</a></li>
            <li className='border-b py-2 '><a href='javascript:void(0)'
                className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Login</a></li>
            <li className='border-b py-2 '><a href='javascript:void(0)'
                className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Sign up</a></li>
            <li className='border-b py-2 '><a href='javascript:void(0)'
                className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Blog</a></li>
          </ul>
        </li>
        <li className='group max-lg:border-b max-lg:py-2 relative'>
          <a href='javascript:void(0)'
            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold lg:hover:fill-[#007bff] block'>Blog<svg
              xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
              <path
                d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                data-name="16" data-original="#000000" />
            </svg>
          </a>
          <ul
            className='absolute hidden group-hover:block shadow-lg bg-white px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px]'>
            <li className='border-b py-2 '><a href='javascript:void(0)'
                className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Foods</a></li>
            <li className='border-b py-2 '>
              <a href='javascript:void(0)' className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Sale</a>
            </li>
            <li className='border-b py-2 '><a href='javascript:void(0)'
                className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Marketing</a></li>
            <li className='border-b py-2 '><a href='javascript:void(0)'
                className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Investment</a></li>
          </ul>
        </li>
        <li className='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Team</a></li>
        <li className='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>About</a></li>
        <li className='max-lg:border-b max-lg:py-2'><a href='javascript:void(0)'
            className='hover:text-[#007bff] text-gray-600 text-[15px] font-bold block'>Contact</a></li>
      </ul>
    </div>
  </header>
  )
}

export default NavbarUi