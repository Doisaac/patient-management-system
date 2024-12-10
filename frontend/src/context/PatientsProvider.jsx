import { createContext, useState, useEffect} from 'react'
import axiosClient from '../config/axios'

const PatientsContext = createContext();

export const PatientsProvider = ({children}) => {
  return (
    <PatientsContext.Provider 
      value={{
        
      }}
    >
      {children}
    </PatientsContext.Provider>
  )
}

export default PatientsContext