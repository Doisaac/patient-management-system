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

const getPatient = async (req, res) => {
  const {id} = req.params;
  let patient;

  // Gets the patient
  try {
    patient = await Patient.findById(id)
  } catch (error) {
    return res.status(404).json({ msg: 'There was an error' });
  }

  if (!patient) {
    return res.status(404).json({ msg: 'The patient was not found' });
  }

  if (
    patient.veterinarianID.toString() !== 
    req.veterinarian._id.toString()
  ) {
    return res.json({ msg: 'Invalid action' });
  }

  res.json(patient);
};

const editPatient = async (req, res) => {
  const {id} = req.params;
  let patient;

  // Gets the patient
  try {
    patient = await Patient.findById(id)
  } catch (error) {
    return res.status(404).json({ msg: 'There was an error' });
  }

  if (!patient) {
    return res.status(404).json({ msg: 'The patient was not found' });
  }
  
  if (
    patient.veterinarianID.toString() !== 
    req.veterinarian._id.toString() 
  ) {
    return res.json({ msg: 'Invalid action' });
  }

  // Updates patient information
  patient.name = req.body.name || patient.name;
  patient.owner = req.body.owner || patient.owner;
  patient.email = req.body.email || patient.email;
  patient.dischargeDate = req.body.dischargeDate || patient.dischargeDate;
  patient.symptoms = req.body.symptoms || patient.symptoms;

  try {
    const updatedPatient = await patient.save();
    res.json(updatedPatient);
  } catch (error) {
    res.json({ msg: 'There was an error editing the patient' });
    console.log(error);
  }
};

const deletePatient = async (req, res) => {
  const { id } = req.params;
  let patient;

  // Gets the patient
  try {
    patient = await Patient.findById(id);
  } catch (error) {
    return res.status(404).json({ msg: 'There was an error with the patient id' });
  }

  if (!patient) {
    return res.status(404).json({ msg: 'The patient was not found' });
  }

  if (
    patient.veterinarianID.toString() !== 
    req.veterinarian._id.toString()
  ) {
    return res.json({ msg: 'Invalid action' });
  }

  try {
    await patient.deleteOne();
    res.json({ msg: 'Patient deleted successfully' });
  } catch (error) {
    res.json({ msg: 'There was an error deleting the patient' });
  }
};

export {
  addPatient,
  getPatients,
  getPatient,
  editPatient,
  deletePatient
}