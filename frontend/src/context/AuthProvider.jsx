import { useState, useEffect, createContext } from 'react';
import axiosClient from '../config/axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [loading, setLoading ] = useState(true);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const authenticateUser = async () => {
      const token = localStorage.getItem('token');
      
      // In case there is no token
      if (!token) {
        setLoading(false);
        return;
      } 
      
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

      setLoading(false);
    };

    authenticateUser();
  }, []);

  const logOut = () => {
    localStorage.removeItem('token');
    setAuth({});
  }

  return (
    <AuthContext.Provider 
      value={{
        auth,
        setAuth,
        loading,
        logOut
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