import React, {createContext, useState, useContext, Children} from 'react'

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
export const AuthProvider = ({children})=>{
    const [isAuthenticated, setIsAuthenticated]= useState(false);
    const [user, setUser] = useState('');

    const login = () =>{
        setUser('rohan');
        setIsAuthenticated(true);
    };
    const signout = ()=>{
        setUser ('');
        setIsAuthenticated(false);
    }

  return (
   <AuthContext.Provider value={{isAuthenticated, user,login,signout}}>
   {children}
   </AuthContext.Provider>
  )
};

export default AuthContext