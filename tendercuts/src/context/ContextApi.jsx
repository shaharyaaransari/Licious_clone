import {createContext,useState} from "react"
   export const AuthContext= createContext();
    const AuthContextProvider=({children})=>{
        const [isAuth,setAuth]=useState(false);
        const handleAuth=()=>{
  
            setAuth(prev=>!prev)
           }

        return(
            <AuthContext.Provider value={{isAuth,handleAuth
            }}>
                {children}
            </AuthContext.Provider>
        )
    }

    export default AuthContextProvider;
