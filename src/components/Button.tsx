import React, { RefObject } from 'react';
import { BsChevronRight } from 'react-icons/bs';

function Button ({children} : {children: React.ReactNode }) {
    
    return (
        <button className='border-2 border-[#4760AC] rounded-lg py-2 px-5 text-[#4760AC] transition-all font-medium flex items-center gap-1 hover:bg-soft active:bg-inherit focus:shadow-btn outline-none'>
            {children}<BsChevronRight size={20} color='#4760AC'/>
        </button>
    );
}

export default Button;