import { useState, useEffect } from 'react';
import Alert from '../components/Alert';
import usePatients from '../hooks/usePatients'

function Form() {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [dischargeDate, setDischargeDate] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [id, setId] = useState(null);

  const [alert, setAlert] = useState({});

  const { savePatient, patient } = usePatients();

  useEffect(() =>{
    if (patient?.name) {
      setName(patient.name);
      setOwner(patient.owner);
      setEmail(patient.email);
      setDischargeDate((new Date(patient.dischargeDate).toLocaleDateString('en-CA')));
      setSymptoms(patient.symptoms);
      setId(patient._id);
    }
  }, [patient]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const fields = [name, owner, email, dischargeDate, symptoms].map((field) =>
      field.trim()
    );

    if (fields.includes('')) {
      setAlert({ msg: 'Complete the fields', error: true });
      return;
    }

    setAlert({});

    savePatient({name, owner, email, symptoms, id});

    setAlert({ msg:  `${id ? 'Edited Correctly' : 'Saved Correctly'}`, error: false });

    setName('');
    setOwner('');
    setEmail('');
    setDischargeDate('')
    setSymptoms('');
    setId(null);

    setTimeout(() => { setAlert({}) }, 2000);
  };

  return (
    <>
      <h2 className="font-black text-3xl text-center">Patient Management</h2>

      <p className="text-xl mt-5 text-center">
       Add your Patients and {''}
        <span className="text-indigo-600 font-bold">
          Manage Them
        </span>
      </p>

      <form
        className="bg-white py-10 px-5 mb-10 md:mb-5 shadow-md rounded-md my-10"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="pet"
            className="text-gray-400 uppercase font-bold"
          >
            Pet Name
          </label>
          <input
            id="pet"
            type="text"
            placeholder="Your pet's name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="owner"
            className="text-gray-400 uppercase font-bold"
          >
            Owner Name
          </label>
          <input
            id="owner"
            type="text"
            placeholder="Pet owner name"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="text-gray-400 uppercase font-bold"
          >
            Owner Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Owner email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="discharge-date"
            className="text-gray-400 uppercase font-bold"
          >
            Discharge date
          </label>
          <input
            id="discharge-date"
            type="date"
            placeholder="pet discharge date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={dischargeDate}
            onChange={(e) => setDischargeDate(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="symptoms"
            className="text-gray-400 uppercase font-bold"
          >
            Symptoms
          </label>
          <textarea
            id="symptoms"
            placeholder="pet symptoms"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 cursor-pointer transition-colors"
          value={ id ? 'Edit Patient' : 'Add Patient'}
        />
      </form>

      {alert.msg && <Alert alertObj={alert} />}
    </>
  );
}

export default Form;
