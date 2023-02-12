const Cheeses = require('../models/cheese');
const errMessage = require('../routes/menuRouter');

const cheeseController = async (req, res) => {
  try {
    const cheeses = await Cheeses.findAll({
      order: [['cheese_id']],
    });
    if (cheeses.length === 0) {
      throw Object.assign(new Error(), { code: 400 });
    } else {
      res.json(cheeses);
    }
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage(req, res);
  }
};

module.exports = cheeseController;
