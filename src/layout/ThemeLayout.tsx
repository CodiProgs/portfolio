"use client"

import React, { useEffect } from 'react';
import { useGeneralStore } from '@/stores/generalStore'

function ThemeLayout ({children}: {children: React.ReactNode}) {
    const isDarkMode = useGeneralStore((state) => state.isDarkMode)
    const [mounted, setMounted] = React.useState(false)
    useEffect(() => {
        setMounted(true)
    })
    
    if(mounted){
        return (
            <div className={[isDarkMode ? 'dark' : '', 'min-h-screen h-full'].join(' ')}>
                {children}
            </div>
        );
    }
    
}

export default ThemeLayout;