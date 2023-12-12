// routes/eateries.js
const express = require('express');
const router = express.Router();
const eateriesController = require('../controllers/eateriesController');

// Route for the list of eateries
router.get('/', eateriesController.index);

// Route for individual eatery details using route parameter :id
router.get('/:id', eateriesController.show);

module.exports = router;
