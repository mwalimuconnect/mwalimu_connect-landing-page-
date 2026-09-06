const express = require('express');
const dbConnect = require('../lib/dbconnect');
const Swap = require('../models/swap');
const BomJob = require('../models/bomjob');
const Applicant = require('../models/applicant');
const Payment = require('../models/payment');
const app = express();
app.use(express.json());

// ==================== SWAPS ====================
app.get('/api/swaps', async (req, res) => {
  await dbConnect();
  try {
    const swaps = await Swap.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: swaps });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/swaps', async (req, res) => {
  await dbConnect();
  try {
    const newSwap = await Swap.create(req.body);
    return res.status(201).json({ success: true, data: newSwap });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

// ==================== BOM JOBS ====================
app.get('/api/bom-jobs', async (req, res) => {
  await dbConnect();
  try {
    const jobs = await BomJob.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: jobs });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/bom-jobs', async (req, res) => {
  await dbConnect();
  try {
    const newJob = await BomJob.create(req.body);
    return res.status(201).json({ success: true, data: newJob });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

// ==================== APPLICANTS ====================
app.get('/api/applicants', async (req, res) => {
  await dbConnect();
  try {
    const applicants = await Applicant.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: applicants });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/applicants', async (req, res) => {
  await dbConnect();
  try {
    const newApplicant = await Applicant.create(req.body);
    return res.status(201).json({ success: true, data: newApplicant });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

// ==================== PAYMENTS ====================
app.get('/api/payments', async (req, res) => {
  await dbConnect();
  try {
    const { phoneNumber, status, startDate, endDate } = req.query;
    let filter = {};

    if (phoneNumber) filter.phoneNumber = phoneNumber;
    if (status) filter.status = status;

    if (startDate || endDate) {
      filter.createdAt = {};
      if (startDate) filter.createdAt.$gte = new Date(startDate);
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        filter.createdAt.$lte = end;
      }
    }

    const payments = await Payment.find(filter).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: payments.length, data: payments });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/payments', async (req, res) => {
  await dbConnect();
  try {
    const newPayment = await Payment.create(req.body);
    return res.status(201).json({ success: true, data: newPayment });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = app;
