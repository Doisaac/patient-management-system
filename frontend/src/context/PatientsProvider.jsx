import { createContext, useState, useEffect} from 'react'
import axiosClient from '../config/axios'

const PatientsContext = createContext();

export const PatientsProvider = ({children}) => {
  const [patients, setPatients] = useState([]);

  const savePatient = async (patient) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      const { data } = await axiosClient.post('/patients', patient, config);

      const { createdAt, updatedAt, __v, ...newPatient } = data;
      
      setPatients([newPatient, ...patients]);
    } catch (error) {
      console.log('ERROR');
      console.log(error.response.data.msg);
    }
  }

  return (
    <PatientsContext.Provider 
      value={{
        patients,
        savePatient
      }}
    >
      {children}
    </PatientsContext.Provider>
  )
}

export default PatientsContext