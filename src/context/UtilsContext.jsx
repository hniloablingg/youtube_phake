import { createContext, useContext, useState } from "react";

const UtilsContext = createContext(null);

export const UtilsContextProvider = ({ children }) => {
    const [isSidebar, setIsSideBar] = useState(false);
    const [mobileShow, setMobileShow] = useState(false);

    return (
        <UtilsContext.Provider value={{ isSidebar, setIsSideBar, mobileShow, setMobileShow }}>
            {children}
        </UtilsContext.Provider>
    );
};

export const useUtils = () => {
    const context = useContext(UtilsContext);
    
    if (!context) {
        throw new Error("useUtils must be used within a UtilsContextProvider");
    }
    
    return context;
};