import React from 'react';
import TitlePage from './TitlePage';
import Image from 'next/image';
import Link from 'next/link';

function ContactMe () {
    return (
        <>
            <TitlePage text='My contacts'/>
            <p className='text-secondary text-sm mb-8'>You can reach me via email or take a look at my ongoing projects posted on GitHub.</p>
            <div className="flex flex-col gap-5 mb-8">
            <div className="flex gap-2">
                <Image src='/yahoo.svg' width={24} height={24} alt=''/>
                <a href="mailto:samuil.codiwork@yahoo.com" className='underline'>samuil.codiwork@yahoo.com</a>
            </div>
            <div className="flex gap-2">
                <Image src='/mail.svg' width={24} height={24} alt=''/>
                <Link href='mailto:samuil.codiWork@mail.ru' className='underline'>samuil.codiWork@mail.ru</Link>
            </div>
            <div className="flex gap-2">
                <Image src='/github.svg' width={24} height={24} alt=''/>
                <Link href='https://github.com/CodiProgs' className='underline'>CodiProgs</Link>
            </div>
            </div>
            <div className="text-sm">Thanks for stopping by! I&apos;m looking forward to our conversation.</div>
        </>
    );
}

export default ContactMe;