// routes/hacks.js
const express = require('express');
const router = express.Router();
const hacksController = require('../controllers/hacksController');

router.get('/', hacksController.getAllHacks);

//create hack
router.post('/', hacksController.createHack)


router.get('/:id', hacksController.getHackById);

router.delete('/:id',hacksController.deleteHack);

//update
router.put('/:id', hacksController.updateHack);

module.exports = router;














// POST: add a new hackathon from request body
// app.post('/hackathons', (req, res) => {
//   const newHackathon = req.body;
//   newHackathon.id = hackathons.length + 1; // auto ID
//   hackathons.push(newHackathon);
//   res.status(201).json({ message: 'Hackathon added!', hackathon: newHackathon });
// });