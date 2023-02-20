const { Op } = require('sequelize');
const Menus = require('../models/menu');
const errMessage = require('../errMessage');

const sandwichController = async (req, res) => {
  try {
    const menus = await Menus.findAll({
      where: { menu_category: { [Op.notIn]: ['샐러드'] } }, // 카테고리에 '샐러드'가 포함되지 않으면 샌드위치이다.
      order: [['menu_id']],
    });
    if (menus.length === 0) {
      throw Object.assign(new Error(), { code: 400 });
    } else {
      res.json(menus);
    }
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage.resourceNotFoundException(req, res);
  }
};

module.exports = sandwichController;
