import React from 'react';

function TitlePage ({text}: {text: string}) {
    return (
        <h2 className='text-3xl font-semibold mb-8 max-md:text-2xl'>{text}</h2>
    );
}

export default TitlePage;