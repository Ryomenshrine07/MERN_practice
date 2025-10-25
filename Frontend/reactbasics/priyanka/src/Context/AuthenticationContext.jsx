import { createContext, useContext, useState } from "react";



export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    return(
        <AuthContext.Provider value={{user,setUser,isAuthenticated,setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}


// Custom hook
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined) throw new Error("Context not defined")
    return context;
};