const {Hack} = require('../models');
let hacks = []

// exports.getAllHacks = (req, res) => {
//     res.json(hacks);
// };

exports.getAllHacks = async (req, res) => {
    const hacks = await Hack.findAll({include:['project']});
    res.json(hacks);
}

exports.getHackById = (req, res) => {
    const hack = hacks.find(u => u.id === parseInt(req.params.id));
    hack ? res.json(user) : res.status(404).json({message:'User not found'});
}

exports.createHack = (req, res) => {
      const newHack = req.body;
    hacks.push(newHack);
    res.send("hack added successfully!");
}
exports.delete = (req,res)=>{
    const hack = hacks.find(u =>u.id === parseInt(req.params.id));
    hack ? res.json(user) : res.status(404).json({message:'User not found'})
    hacks.splice(hack,1);
}

exports.updateHack = (req,res)=>{
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
}

exports.create