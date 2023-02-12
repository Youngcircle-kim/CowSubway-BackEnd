const { Op } = require('sequelize');
const Menus = require('../models/menu');
const errMessage = require('../routes/menuRouter');

const saladController = async (req, res) => {
  try {
    const menus = await Menus.findAll({
      where: { menu_category: { [Op.in]: ['샐러드'] } }, // 카테고리에 '샐러드'가 포함되어 있으면 샐러드이다.
      order: [['menu_price', 'desc']],
    });
    if (menus.length === 0) {
      throw Object.assign(new Error(), { code: 400 });
    } else {
      res.json(menus);
    }
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage(req, res);
  }
};

module.exports = saladController;
