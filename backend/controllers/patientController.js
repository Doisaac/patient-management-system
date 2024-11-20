import Patient from "../models/Patient.js";

const addPatient = async (req, res) => {
  const patient = new Patient(req.body);
  patient.veterinarianID = req.veterinarian.id;

  try {
    const patientStoraged = await patient.save();
    res.json(patientStoraged);
  } catch (error) {
    res.json({ msg: 'There was an error, try again' })
  }
};

const getPatients = async (req, res) => {
  const patients = await Patient.find()
    .where('veterinarianID')
    .equals(req.veterinarian.id);
    
  res.json(patients);
};

export {
  addPatient,
  getPatients
}