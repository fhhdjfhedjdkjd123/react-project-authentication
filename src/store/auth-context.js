import React,{useState} from 'react';
const AuthContex=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
})

export const AuthContextProvider=(props)=>{
    const [token,setToken]=useState(null);
    const userLoggedIn=!!token;

    const loginHandler=()=>{
        setToken(token);
    }

    const logoutHandler=()=>{
        setToken(null);
    }

    const contextValue={
        token:token,
        isLoggedIn:userLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }

    return <AuthContex.Provider value={contextValue}>{props.children}</AuthContex.Provider>
}
export default AuthContex;