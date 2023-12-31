import React,{useState} from 'react';
const AuthContex=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
})

export const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem('token');
    const [token,setToken]=useState(initialToken);
    const userLoggedIn=!!token;

    const loginHandler=(token)=>{
        setToken(token);
        localStorage.setItem('token',token);
    }

    const logoutHandler=()=>{
        setToken(null);
        localStorage.removeItem('token');
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