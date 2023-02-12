const Vegetables = require('../models/vegetable');
const errMessage = require('../errMessage');

const vegetableController = async (req, res) => {
  try {
    const vegetables = await Vegetables.findAll({
      order: [['vegetable_id']],
    });
    if (vegetables.length === 0) {
      throw Object.assign(new Error(), { code: 400 });
    } else {
      res.json(vegetables);
    }
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage.resourceNotFoundException(req, res);
  }
};

module.exports = vegetableController;
