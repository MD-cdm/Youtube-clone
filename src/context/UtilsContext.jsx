// const { createContext, useState, useContext } = require("react");

// const UtilsContext = createContext();

// export const UtilsContextProvider = ({ children }) => {
//     const [isSidebar, setIsSidebar] = useState(false);
//     const [mobileShow, setMobileShow] = useState(false);

//     return <UtilsContext.Provider value={{ isSidebar, setIsSidebar, mobileShow, setMobileShow }}>
//         {children}
//     </UtilsContext.Provider>
// }
// export const useUtils = () => {
//     const utilsContext = useContext(UtilsContext);
//     if (!utilsContext) return null;
//     return utilsContext;
// }



import React, { createContext, useState, useContext } from 'react';

const UtilsContext = createContext({
    isSidebar: false,
    setIsSidebar: () => {},
    mobileShow: false,
    setMobileShow: () => {},
});

export const UtilsContextProvider = ({ children }) => {
    const [isSidebar, setIsSidebar] = useState(false);
    const [mobileShow, setMobileShow] = useState(false);

    return (
        <UtilsContext.Provider value={{ isSidebar, setIsSidebar, mobileShow, setMobileShow }}>
            {children}
        </UtilsContext.Provider>
    );
};

export const useUtils = () => {
    const context = useContext(UtilsContext);
    if (context === undefined) {
        throw new Error('useUtils must be used within a UtilsContextProvider');
    }
    return context;
};
