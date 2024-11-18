import mongoose from 'mongoose';

const PatientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    owner: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    dischargeDate: {
      type: Date,
      required: true,
    },
    symptoms: {
      type: String,
      required: true,
    },
    veterinarianID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Veterinarian',
    },
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model('Patient', PatientSchema);

export default Patient;