// routes/hacks.js
const express = require('express');
const router = express.Router();
const hacksController = require('../controllers/hacksController');



let hacks = [];

//get all
// router.get('/', (req,res)=>{
//     if(!hacks){
//         res.send("hacks is empty!");
//     }
//     res.status(200).json(hacks);
// })
router.get('/', hacksController.getAllHacks);

//create hack
router.post('/', hacksController.createHack)


//get by id
// router.get('/:id', (req, res)=>{
//     const id = parseInt(req.params.id);

//     const hack = hacks.find(h => h.id == id);

//     if(!hack){
//         return res.status(404).json({message:'hack not found!'});
//     }

//     res.status(200).json(hack);
// })
router.get('/:id', hacksController.getHackById);

//delete
// router.delete('/:id',(req, res)=>{
//      const id = parseInt(req.params.id);

//     const index = hacks.findIndex(h => h.id == id);

//     if (index === -1) {
//          return res.status(404).json({ message: 'Hack not found!' });
//     }
    

//     hacks.splice(index, 1);

//     res.status(200).json({message:"deleted successfully!"})

// })
router.delete('/:id',hacksController.delete);

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