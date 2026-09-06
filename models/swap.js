const mongoose = require('mongoose');

const SwapSchema = new mongoose.Schema({
  teacherName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  currentCounty: { type: String, required: true },
  desiredCounty: { type: String, required: true },
  subjectCombination: { type: String, required: true },
  tscNumber: { type: String, required: false },
}, { timestamps: true });

module.exports = mongoose.models.Swap || mongoose.model('Swap', SwapSchema);
