const Combos = require('../models/combo');
const errMessage = require('../routes/menuRouter');

const comboController = async (req, res) => {
  try {
    const combos = await Combos.findAll();
    if (combos.length === 0) {
      errMessage(req, res);
    } else {
      res.json(combos);
    }
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage(req, res);
  }
};

module.exports = comboController;
