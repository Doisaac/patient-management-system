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
    return res.json({ msg: 'The patient id is not valid' });
  }

  const veterinarianId = patient.veterinarianID.toString();
  const veterinarianIdFromRequest = req.veterinarian._id.toString();

  if (veterinarianId !== veterinarianIdFromRequest ) {
    return res.json({ msg: 'Invalid action' });
  }

  res.json(patient);
};

const editPatient = async (req, res) => {

};

const deletePatient = async (req, res) => {

};
export {
  addPatient,
  getPatients,
  getPatient,
  editPatient,
  deletePatient
}