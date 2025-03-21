
const express = require('express');
const router = express.Router();
const errorController = require('../controllers/errorController'); // Make sure this path is correct

// This route will trigger an error
router.get('errors/trigger-error', errorController.triggerError);

module.exports = router;