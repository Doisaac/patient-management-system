import usePatients from '../hooks/usePatients';
import Patient from './Patient';

const PatientList = () => {
  const { patients } = usePatients();

  return (
    <>
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Patient List</h2>

          <p className="text-xl mt-5 text-center">
            Manage your {''}
            <span className="text-indigo-600 font-bold">Patients</span>
          </p>

          {patients.map((patient) => (
            <Patient
              key={patient._id}
              patient={patient}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No patients yet</h2>
          <p className="text-xl mt-5 text-center">
            Start adding your patients to {''}
            <span className="text-indigo-600 font-bold">
              display them below
            </span>
          </p>
        </>
      )}
    </>
  );
};

export default PatientList;
