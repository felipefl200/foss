
import { createContext, useState } from 'react'

type CookieContextProps = {
    children: React.ReactNode
}

type CookieContextType = {
    hasCookie: Boolean
    setHasCookie: (newState: boolean) => void

}
const initialValue = {
    hasCookie: false,
    setHasCookie: () => { }
}

export const CookieContext = createContext<CookieContextType>(initialValue)

export const CookieContextProvider = ({ children }: CookieContextProps) => {
    const [hasCookie, setHasCookie] = useState(initialValue.hasCookie)
    return (
        <CookieContext.Provider value={{ hasCookie, setHasCookie }}>
            {children}
        </CookieContext.Provider>
    )
}