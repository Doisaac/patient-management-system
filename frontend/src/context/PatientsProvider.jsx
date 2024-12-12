import { createContext, useState, useEffect} from 'react'
import axiosClient from '../config/axios'

const PatientsContext = createContext();

export const PatientsProvider = ({children}) => {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(() => {
    const getPatients = async() => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;
    
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        };

        const {data} = await axiosClient('/patients', config);
        setPatients(data);
      } catch (error) {
        console.log(error);
      }
    }
    getPatients();
  }, []);

  const savePatient = async (patient) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    if (patient.id) {
      try {
        const { data } = await axiosClient.put(`/patients/${patient.id}`, patient, config);
        
        const updatedPatients = patients.map((patientState) =>
          patientState._id === data._id ? data : patientState
        );

        setPatients(updatedPatients);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    } else {
      try {
        const { data } = await axiosClient.post('/patients', patient, config);

        const { createdAt, updatedAt, __v, ...newPatient } = data;

        setPatients([newPatient, ...patients]);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    }
  }

  const setEdition = (patient) => {
    setPatient(patient);
  }

  const deletePatient = async (id) => {
    const confirmDelete = confirm(
      'Are you sure you want to delete the patient?'
    );

    if (confirmDelete) {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axiosClient.delete(`patients/${id}`, config);

        const updatedPatients = patients.filter(patientState => patientState._id != id);

        setPatients(updatedPatients);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <PatientsContext.Provider 
      value={{
        patients,
        savePatient,
        setEdition,
        patient,
        deletePatient
      }}
    >
      {children}
    </PatientsContext.Provider>
  )
}

export default PatientsContext