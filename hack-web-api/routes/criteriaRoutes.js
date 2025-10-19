const express = require('express');
const router = express.Router();
const critereController = require('../controllers/critereController');

// Get all criteria for a specific hackathon
router.get('/hacks/:hackId/criteres', critereController.getCriteresByHack);

// Create a new criterion for a hackathon
router.post('/hacks/:hackId/criteres', critereController.createCritere);

// Delete a criterion by its ID
router.delete('/criteres/:id', critereController.deleteCritere);

// (Optional) Update a criterion
router.put('/criteres/:id', critereController.updateCritere);

module.exports = router;
