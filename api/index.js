const express = require('express');
const dbConnect = require('../lib/dbconnect'); // Lowercase import

const Swap = require('../models/swap');
const BomJob = require('../models/bomjob');
const Applicant = require('../models/applicant');

const app = express();
app.use(express.json());

// ... (rest of your route handlers remain the same)
