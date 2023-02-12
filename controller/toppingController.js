const Topping = require('../models/topping');
const errMessage = require('../errMessage');

const toppingController = async (req, res) => {
  try {
    const topping = await Topping.findAll({
      order: [['topping_id']],
    });
    if (topping.length === 0) {
      throw Object.assign(new Error(), { code: 400 });
    } else {
      res.json(topping);
    }
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage.resourceNotFoundException(req, res);
  }
};

module.exports = toppingController;
