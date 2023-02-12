const Extras = require('../models/extras');
const errMessage = require('../routes/menuRouter');

const extraController = async (req, res) => {
  try {
    const extras = await Extras.findAll({
      order: [['extras_id']],
    });
    if (extras.length === 0) {
      throw Object.assign(new Error(), { code: 400 });
    } else {
      res.json(extras);
    }
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage(req, res);
  }
};

module.exports = extraController;
