"use client"

import { useGeneralStore } from '../stores/generalStore';
import Link from 'next/link';
import React, { useState } from 'react';
import { HiMoon } from "react-icons/hi2";
import { BsCircleFill } from "react-icons/bs";

function Header () {
    const isDarkMode = useGeneralStore((state) => state.isDarkMode)
    const setDarkMode = useGeneralStore((state) => state.setDarkMode)
    const [isOpenNav, setIsOpenNav] = useState(false)
    return (
        <div className='flex w-full items-center justify-between py-7 h-[96px]'>
            <Link href='/' className='text-4xl font-bold max-md:text-2xl'>CodiWork</Link>
            <div className="flex items-center gap-8">
                <button onClick={() => setDarkMode(!isDarkMode)} className={['w-12 h-6 flex items-center rounded-full border px-1', isDarkMode ? 'bg-[#0f172a] border-[#535456]' : 'bg-white border-[#cfd1d4]'].join(' ')}>
                    <div className={["w-[14px] h-[14px] rounded-full transition-all", isDarkMode ? 'mr-auto' : 'ml-auto'].join(' ')}>
                        {isDarkMode ? <HiMoon size={14} color='#BDD0E4'/> : <BsCircleFill size={14} color='#FFCF48' />}
                    </div>
                </button>
                <button className='hidden flex-col justify-between w-[30px] h-[20px] bg-inherit max-md:flex' onClick={() => setIsOpenNav(!isOpenNav)}>
                    <span className={['w-full h-[2px]', isDarkMode ? 'bg-white' : 'bg-black'].join(' ')}></span>
                    <span className={['w-full h-[2px]', isDarkMode ? 'bg-white' : 'bg-black'].join(' ')}></span>
                    <span className={['w-full h-[2px]', isDarkMode ? 'bg-white' : 'bg-black'].join(' ')}></span>
                </button>
                <div className={["flex items-center gap-5 max-md:top-[96px] max-md:left-0 max-md:-translate-y-[200%] max-md:opacity-0 max-md:transition-all max-md:absolute max-md:h-[calc(100vh-96px)] max-md:gap-10 max-md:w-full max-md:flex-col max-md:justify-center z-50", isOpenNav ? 'max-md:translate-y-0 max-md:opacity-100' : '', isDarkMode ? 'bg-[#0f172a]' : 'bg-white'].join(' ')}>
                    <Link href='/'>Homepage</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/works'>Works</Link>
                    <Link href='/contact'>Contact</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;