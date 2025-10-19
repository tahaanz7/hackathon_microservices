const Hack = require('../models/Hack');

// ✅ Get all hacks
exports.getAllHacks = async (req, res) => {
  try {
    const hacks = await Hack.findAll();
    res.json(hacks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get hack by ID
exports.getHackById = async (req, res) => {
  try {
    const { id } = req.params;
    const hack = await Hack.findByPk(id); // Sequelize method

    if (!hack) {
      return res.status(404).json({ message: 'Hack not found' });
    }

    res.json(hack);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Create new hack
exports.createHack = async (req, res) => {
  try {
    const newHack = await Hack.create(req.body);
    res.status(201).json(newHack);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update hack
exports.updateHack = async (req, res) => {
  try {
    const { id } = req.params;
    const hack = await Hack.findByPk(id);

    if (!hack) {
      return res.status(404).json({ message: 'Hack not found' });
    }

    await hack.update(req.body);

    res.status(200).json({
      message: 'Hack updated successfully',
      hack,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Delete hack
exports.deleteHack = async (req, res) => {
  try {
    const { id } = req.params;
    const hack = await Hack.findByPk(id);

    if (!hack) {
      return res.status(404).json({ message: 'Hack not found' });
    }

    await hack.destroy();

    res.json({ message: 'Hack deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
