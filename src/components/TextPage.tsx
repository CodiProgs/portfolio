import React from 'react';

function TextPage ({children} : {children: React.ReactNode}) {
    return (
        <div className='font-podkova text-secondary text-lg max-md:text-sm'>
            {children}
        </div>
    );
}

export default TextPage;