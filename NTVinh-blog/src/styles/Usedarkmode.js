import  { useEffect, useState } from 'react';

export const Usedarkmode = () => {

    const [theme, setTheme] = useState('light');

    const setMode =(mode)=>{      
        setTheme(mode)
        window.localStorage.setItem('theme',mode)
    }

    const toggleTheme =()=>{
        
        // theme === 'dark' ? setTheme('light') : setTheme('dark');
        theme === 'dark' ? setMode('light') : setMode('dark');
     }

     //save theme
     useEffect(()=>{
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('dark')
    },[])

    return [theme, toggleTheme]
}
