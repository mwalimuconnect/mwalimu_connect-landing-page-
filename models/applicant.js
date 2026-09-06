const mongoose = require('mongoose');

const ApplicantSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  subjectCombination: { type: String, required: true },
  location: { type: String, required: true },
  qualification: { type: String, required: true },
  tscRegistered: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.models.Applicant || mongoose.model('Applicant', ApplicantSchema);
