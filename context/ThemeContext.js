import React, { useEffect, useState } from "react"

export const ThemeContext = React.createContext()



const ThemeProvider = ({children})=>{
    const [darkMode, setDarkMode] = useState(false)

    useEffect(()=>{
        document.body.style.backgroundColor = darkMode ? '#202c37' : '#fafafa'
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{
            darkMode,
            setDarkMode
        }}>
            {children}
        </ThemeContext.Provider>
    )
}


export default ThemeProvider