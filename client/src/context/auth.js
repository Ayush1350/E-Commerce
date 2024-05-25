import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    user: null,
    token: "",
    isLogin:false,
  });
  
  //default axios
  axios.defaults.headers.common["Authorization"] = auth?.token;
 
  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      const parseData = JSON.parse(data);
      setAuth({
        ...auth,
        user: parseData.user,
        token: parseData.token,
        isLogin:true
      });
    }
    //eslint-disable-next-line
  }, []);
 
 


  return (
    <AuthContext.Provider value={[auth, setAuth,]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };