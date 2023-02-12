const Sauces = require('../models/sauce');
const errMessage = require('../routes/menuRouter');

const sauceController = async (req, res) => {
  try {
    const sauces = await Sauces.findAll({
      order: [['sauce_id']],
    });
    if (sauces.length === 0) {
      throw Object.assign(new Error(), { code: 400 });
    } else {
      res.json(sauces);
    }
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage(req, res);
  }
};

module.exports = sauceController;
