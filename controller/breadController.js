const Breads = require('../models/bread');
const errMessage = require('../errMessage');

const breadController = async (req, res) => {
  try {
    const breads = await Breads.findAll({
      order: [['bread_id']],
    });
    if (breads.length === 0) {
      throw Object.assign(new Error(), { code: 400 });
    } else {
      res.json(breads);
    }
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage.resourceNotFoundException(req, res);
  }
};

module.exports = breadController;
