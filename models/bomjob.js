const mongoose = require('mongoose');

const BomJobSchema = new mongoose.Schema({
  schoolName: { type: String, required: true },
  county: { type: String, required: true },
  subCounty: { type: String, required: true },
  subjectsNeeded: { type: String, required: true },
  contactPerson: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  deadline: { type: String, required: false },
}, { timestamps: true });

module.exports = mongoose.models.BomJob || mongoose.model('BomJob', BomJobSchema);
