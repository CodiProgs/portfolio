import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Footer () {
    return (
        <div className='flex gap-16 py-10 flex-wrap justify-between mt-auto'>
            <div className='max-w-[30%]'>
                <h4 className='text-4xl font-bold mb-5 max-md:text-2xl'>CodiWork</h4>
                <p className='text-secondary text-sm'>“Aspiring full-stack developer with a strong foundation in front-end and back-end technologies. Eager to learn and apply cutting-edge skills to create dynamic web solutions&quot;“</p>
            </div>
            <div>
                <h4 className='text-2xl font-semibold mb-8 max-md:text-xl'>My contacts</h4>
                <div className="flex flex-col gap-5">
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
            </div>
            <div>
                <h4 className='text-2xl font-semibold mb-8 max-md:text-xl'>Useful Links</h4>
                <ul className='flex flex-col gap-5'>
                    <li><Link href='/'>HomePage</Link></li>
                    <li><Link href='/about'>About me</Link></li>
                    <li><Link href='/works'>Works</Link></li>
                    <li><Link href='/contact'>Get in Touch</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;