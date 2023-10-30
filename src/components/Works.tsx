import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Works () {
    return (
        <div className='grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1'>
            <Link href='/work/1' className="shadow-xl bg-soft">
                <Image src='/welcome.jpg' alt='' width={1920} height={1080} className='w-full aspect-video object-cover'/>
                <div className="pt-5 px-5 pb-10">
                    <div className="text-sm text-secondary mb-2">Store</div>
                    <div className="text-3xl font-semibold">Market</div>
                </div>
            </Link>
        </div>
    );
}

export default Works;