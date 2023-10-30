import React from 'react';
import TitlePage from './TitlePage';

function ContactForm () {
    return (
        <>
            <TitlePage text='Get in Touch'/>
          <p className='text-secondary text-sm mb-10'>If you&apos;d like to connect, discuss a project, or what about opportunities, I&apos;d be more than excited to hear from you! Please use the feedback form below or contact me using any of the alternative communication methods.</p>
          <div className='grid gap-8'>
            <div className="grid grid-cols-2 gap-8">
              <input type="text" placeholder='Who are you?' className='border px-6 py-4'/>
              <input type="email" placeholder='Email' className='border px-6 py-4'/>
            </div>
            <textarea placeholder='Your message' className='border px-6 py-4'></textarea>
            <button className='border-2 border-[#4760AC] rounded-lg py-2 px-5 text-[#4760AC] transition-all justify-center font-medium flex items-center gap-1 hover:bg-[#dadfee] active:bg-[#b5bfde] focus:shadow-btn outline-none'>
              Send Message
            </button>
          </div>
        </>
    );
}

export default ContactForm;