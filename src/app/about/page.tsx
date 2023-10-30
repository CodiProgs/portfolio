import ContactMe from '../../components/ContactMe';
import ImagePage from '../../components/ImagePage';
import TextPage from '../../components/TextPage';
import TitlePage from '../../components/TitlePage';
import Image from 'next/image';
import React from 'react';

function page () {
    return (
        <>
            <div className="grid grid-cols-10 py-10 max-lg:grid-cols-3 max-lg:gap-12 max-md:gap-4 max-md:grid-cols-1">
                <div className="col-span-5 max-lg:col-span-2 max-md:col-span-1">
                <h1 className='text-6xl font-podkova mb-5 max-xl:text-5xl max-md:text-3xl'>About Me</h1>
                <p className='text-lg text-secondary mb-8 max-md:text-sm'>Hello, I'm Samuil, and I'm on an exciting journey to become a proficient full stack developer. I'm passionate about technology, problem-solving, and creating digital</p>

                </div>
                <div className="col-span-4 col-start-7 max-lg:col-span-1">
                <ImagePage image='/aboutme.png' />
                </div>
            </div>
            <div className="w-full h-2 shadow-sm"/>
            <div className="py-10">
            <div className="max-w-5xl text-center mx-auto">
            <TitlePage text='My Skills'/>
            <TextPage>As a novice fullstack developer, I'm eager to embrace a wide range of technologies and tools. Here are some of the key skills I've been developing:</TextPage>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-8 max-md:grid-cols-1">
                <div>
                    <h4 className='text-xl font-semibold mb-6 max-md:text-lg'>Frontend</h4>
                    <div className='font-podkova text-secondary'>In front-end development, I've gained experience in building responsive and user-friendly user interfaces. I'm comfortable with HTML and CSS for structuring and styling web pages, and I've delved into JavaScript for adding interactivity and dynamic features to websites. I've worked with modern front-end frameworks like React and Next.js, and I'm always eager to stay updated on the latest trends in the front-end world.</div>
                </div>
                <div>
                    <h4 className='text-xl font-semibold mb-6 max-md:text-lg'>Backend</h4>
                    <div className='font-podkova text-secondary'>
                    On the back-end, I've explored server-side programming and database management. I've worked with technologies like Nest.js and Express to build RESTful APIs and server applications. I've also dipped  into databases like MongoDB and PostgreSQL for data storage and retrieval. I'm keen to deepen my understanding of back-end development and explore new technologies.
                    </div>
                </div>
            </div>
            </div>
            <div className="w-full h-2 shadow-sm"/>
            <div className="py-10 grid grid-cols-2 gap-8 max-md:grid-cols-1">
                <div>
                <TitlePage text='What`s Next'/>
                <TextPage>I'm continuously expanding my knowledge and pushing my boundaries.  I'm always open to new challenges and opportunities in the world of full stack development.</TextPage>
                </div>
                <div>
                <TitlePage text='Goals:'/>
                <TextPage>As a novice full-stack developer, my immediate goals are to gain more practical experience, contribute to open-source projects, and build a strong portfolio.</TextPage>
                </div>
            </div>
            <div className="w-full h-2 shadow-sm"/>
            <div className="py-10">
                <ContactMe/>
            </div>
            <div className="w-full h-2 shadow-sm"/>
        </>
    );
}

export default page;