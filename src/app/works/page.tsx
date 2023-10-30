import Works from '../../components/Works';
import React from 'react';

function page () {
    return (
        <div className='py-10'>
            <h1 className='text-6xl font-podkova mb-5 max-xl:text-5xl max-md:text-3xl'>My works</h1>
            <Works/>
        </div>
    );
}

export default page;