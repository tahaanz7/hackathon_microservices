const express = require('express');
const app = express()
const port = 3000

app.use(express.json());

let hacks = [];

//get all
app.get('/api/hacks', (req,res)=>{
    if(!hacks){
        res.send("hacks is empty!");
    }
    res.status(200).json(hacks);
})

//create hack
app.post('/api/hacks', (req, res)=>{
    const newHack = req.body;
    hacks.push(newHack);
    res.send("hack added successfully!");
})


//get by id
app.get('/api/hacks/:id', (req, res)=>{
    const id = parseInt(req.params.id);

    const hack = hacks.find(h => h.id == id);

    if(!hack){
        return res.status(404).json({message:'hack not found!'});
    }

    res.status(200).json(hack);
})


//delete
app.delete('/api/hacks/:id',(req, res)=>{
     const id = parseInt(req.params.id);

    const index = hacks.findIndex(h => h.id == id);

    if (index === -1) {
         return res.status(404).json({ message: 'Hack not found!' });
    }
    

    hacks.splice(index, 1);

    res.status(200).json({message:"deleted successfully!"})

})

//update
app.put('/api/hacks/:id',(req,res)=>{
    const id = req.params.id;
    const hack = hacks.find(h => h.id === id);

    if(!hack){
        return res.status(404).json({message:"hack not found"});
    }

    hack.id = req.body.id || hack.id;
    hack.name = req.body.name || hack.name;
    hack.theme = req.body.theme || hack.theme;

    res.status(200).json({
        message:'hack updated!',
        hack:hack
    })
})



app.listen(port, () => {
    console.log(`App running on port http://localhost/${port}`)
})














// POST: add a new hackathon from request body
// app.post('/hackathons', (req, res) => {
//   const newHackathon = req.body;
//   newHackathon.id = hackathons.length + 1; // auto ID
//   hackathons.push(newHackathon);
//   res.status(201).json({ message: 'Hackathon added!', hackathon: newHackathon });
// });