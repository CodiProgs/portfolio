import Image from 'next/image';
import React from 'react';

function SkillsItem ({children} : {children: React.ReactNode}) {
    const image = children?.toString().toLowerCase().replace('.', '').replace('/', '')! + '.svg'
    return (
        <div className='w-full gap-3 flex flex-col items-center justify-center'>
            <Image src={image} width={1920} height={1080} alt='' className='w-[64px] h-[64px]'/>
            <div>{children}</div>
        </div>
    );
}

export default SkillsItem;