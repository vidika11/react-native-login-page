import { createContext, useContext, useEffect, useState } from "react";
 

export const Authcontext = createContext();

export const AuthcontextProvider= ({children}) =>{
  const [user,setUser] = useState(null);
  const [isAuthenticated,setIsAuthenticated] = useState(undefined)
  useEffect(()=>{
    
  setIsAuthenticated(false);

},[])

const login = async (email,password)=>{
  try{

  }catch(e){

  }

}
const logout = async ()=>{
  try{

  }catch(e){

  }

}
const register = async (email,password,username,profileurl)=>{
  try{

  
  }catch(e){
    
  }
}
return (

  <Authcontext.Provider value={{user,isAuthenticated,login,register,logout}}>
     {children}
  </Authcontext.Provider>
  )
}
 export const useAuth =()=>{
   const value = useContext(Authcontext);

  if(!value){
    throw new Error('useAuth must be wrapped inside AuthecontextProvider');
  }
  return value;
}
