import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function ImagePage ({image}: {image: string}) {
    return (
        <>
        <Image src={image} width={1920} height={1080} alt='' className='w-full h-auto max-md:w-1/3 max-sm:w-full'/>
        <div className='italic mt-2 text-[#A8A8A8] font-chakra-petch'>The image was created in <Link href='https://playgroundai.com/' className='underline'>playgroundai.com</Link></div>
        </>
    );
}

export default ImagePage;