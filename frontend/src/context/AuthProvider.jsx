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

  const updateProfile = async (profile) => {
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
    };

    try {
      const url = `/veterinarians/profile/${profile._id}`;
      await axiosClient.put(url, profile, config);

      return {
        msg: 'Edited Correctly',
        error: false
      }
    } catch (error) {
      return {
        msg: error.response.data.msg,
        error: true
      }
    }
  }


  return (
    <AuthContext.Provider 
      value={{
        auth,
        setAuth,
        loading,
        logOut,
        updateProfile
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