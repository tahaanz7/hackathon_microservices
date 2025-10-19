const Critere = require('../models/Critere');

//  Get all criteria for a hackathon
exports.getCriteresByHack = async (req, res) => {
  try {
    const { hackId } = req.params;
    const criteres = await Critere.findAll({ where: { hackId } });
    res.status(200).json(criteres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Create a new criterion
exports.createCritere = async (req, res) => {
  try {
    const { hackId } = req.params;
    const { name, description, weight } = req.body;

    const newCritere = await Critere.create({ name, description, weight, hackId });
    res.status(201).json(newCritere);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//  Delete a criterion
exports.deleteCritere = async (req, res) => {
  try {
    const { id } = req.params;
    const critere = await Critere.findByPk(id);

    if (!critere) {
      return res.status(404).json({ message: 'Critere not found' });
    }

    await critere.destroy();
    res.status(200).json({ message: 'Critere deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// (Optional) Update a criterion
exports.updateCritere = async (req, res) => {
  try {
    const { id } = req.params;
    const critere = await Critere.findByPk(id);

    if (!critere) {
      return res.status(404).json({ message: 'Critere not found' });
    }

    await critere.update(req.body);
    res.status(200).json({ message: 'Critere updated successfully', critere });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
