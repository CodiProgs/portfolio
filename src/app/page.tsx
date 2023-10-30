"use client"

import Button from '../components/Button'
import ContactForm from '../components/ContactForm'
import ContactMe from '../components/ContactMe'
import ImagePage from '../components/ImagePage'
import Skills from '../components/Skills'
import TextPage from '../components/TextPage'
import TitlePage from '../components/TitlePage'
import Works from '../components/Works'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <div className="grid grid-cols-10 py-10 max-lg:grid-cols-3 max-lg:gap-12 max-md:grid-cols-1">
        <div className="col-span-5 max-lg:col-span-2 max-md:col-span-1">
          <h1 className='text-6xl font-podkova mb-5 max-xl:text-5xl max-md:text-3xl'>Hello, <br />my name is Samuil <br /> <span className='font-bold'>Fullstack Developer</span></h1>
          <p className='text-lg text-secondary mb-8 max-md:text-sm'>I'm an enthusiastic full-stack developer just starting my journey in the world of web development. I've been having my skills in HTML, CSS, JavaScript, and popular framework like React, Next.js, Nest.js. I'm passionate about creating visually appealing, highly functional web applications and I'm eager to collaborate, learn and grow alongside a team.</p>

        </div>
        <div className="col-span-4 col-start-7 max-lg:col-span-1">
          <ImagePage image='/welcome.jpg' />
        </div>
      </div>
      <div className="grid grid-cols-10 py-10 max-lg:grid-cols-3 max-lg:gap-12 max-md:grid-cols-1">
        <div className="col-span-4 max-lg:col-span-1 max-md:order-2 max-sm:hidden">
          <ImagePage image='/about.jpg'/>
        </div>
        <div className="col-span-5 col-start-6 max-lg:col-span-2 max-md:col-span-1">
          <div className="mb-16">
          <TitlePage text='About Me'/>
          <TextPage>
          I am a passionate and dedicated full-stack developer with expertise in both backend and frontend technologies. My backend development skills are centered around Nest.js, while my frontend development proficiency lies in Next.js. With a keen eye for detail and a thirst for knowledge, I am constantly striving to improve and expand my skill set.
          <br /><br />
          I am on a journey to accumulate valuable experiences in the world of web development.  I am open to diverse opportunities that will help me grow as a developer and make a meaningful impact.
          </TextPage>
          </div>
          <div className='mb-10'>
          <h2 className='text-2xl font-medium mb-8'>Why should you choose me?</h2>
          <TextPage>
          As a passionate and ambitious beginner in web development, I've dedicated myself to learning current technologies, such as Js, Node, Nest . By choosing me, you not only support my growth in the industry, but also benefit from my eagerness to stay informed and adapt. My persistence, problem-solving mindset, and eagerness to collaborate make me an ideal candidate for projects looking for enthusiasm.
          </TextPage>
          </div>
          <Link href='/about' className='w-max block'><Button>More Info</Button></Link>
        </div>
      </div>
      <div className="py-10 text-center">
        <TitlePage text='Skills'/>
        <p className='text-secondary mb-10'>As a beginner web developer, my skills are still in the early stages of development, but I have a firm grasp of the essential tools and languages necessary for creating basic web applications. My current skills include:</p>
        <Skills/>
        <p className='text-secondary mt-8 text-sm'>I am highly motivated to learn and ready to invest time and effort into evolving as a web developer.</p>
      </div>
      <div className="py-10 flex flex-col items-center">
        <TitlePage text='Work'/>
        <div className="mb-8">
          <Works/>
        </div>
        <Link href='/work' className='w-max block'><Button>More</Button></Link>
      </div>
      <div className="grid grid-cols-10 py-10 max-lg:grid-cols-1 max-lg:gap-12 ">
        <div className="col-span-5 max-lg:col-span-1 max-md:col-span-1">
          <ContactForm/>
        </div>
        <div className="col-span-4 col-start-7 max-lg:col-span-1">
          <ContactMe/>
        </div>
      </div>
    </>
  )
}
