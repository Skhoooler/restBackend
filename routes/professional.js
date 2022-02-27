const express = require('express');
const controller = require('../controllers/professional');

const router = express.Router();

// Get Data
router.get('/professional', controller.getProfessionalData);

module.exports = router;