import { useState, useEffect, createContext } from 'react';
import axiosClient from '../config/axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState({});

  useEffect(() => {
    const authenticateUser = async () => {
      const token = localStorage.getItem('token');
      
      // In case there is no token
      if (!token) return;
      
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      }

      try {
        const { data } = await axiosClient('/veterinarians/profile', config);
        
        setAuth(data);
      } catch (error) {
        setAuth({});
      }
    };

    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider 
      value={{
        auth,
        setAuth
      }}
    >
      { children }
    </AuthContext.Provider>
  )
};

export {
  AuthProvider
} 

export default AuthContext;