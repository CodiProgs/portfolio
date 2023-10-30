import ContactForm from '../../components/ContactForm';
import ContactMe from '../../components/ContactMe';
import React from 'react';

function page () {
    return (
        <div>
            <div className="py-10">
            <h1 className='text-6xl font-podkova mb-5 max-xl:text-5xl max-md:text-3xl'>About Me</h1>
            <ContactMe/>
            </div>
            <div className="py-10">
                <ContactForm/>
            </div>
        </div>
    );
}

export default page;