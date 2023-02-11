const express = require('express');
const { Op } = require('sequelize');
const Menus = require('../models/menu');

const Cheeses = require('../models/cheese');
const Extras = require('../models/extras');
const Breads = require('../models/bread');
const Vegetables = require('../models/vegetable');
const Sauces = require('../models/sauce');
const Combos = require('../models/combo');

const menuRouter = express.Router();

const errMessage = (req, res) => {
  res.status(400).send({
    errorMessage: '리소스를 찾을 수 없습니다.',
  });
};

menuRouter.get('/menu/sandwich', async (req, res) => {
  try {
    const menus = await Menus.findAll({
      where: { menu_category: { [Op.notIn]: ['샐러드'] } }, // 카테고리에 '샐러드'가 포함되지 않으면 샌드위치이다.
      order: [['menu_price', 'desc']],
    });
    res.json(menus);
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage(req, res);
  }
});

menuRouter.get('/menu/salad', async (req, res) => {
  try {
    const menus = await Menus.findAll({
      where: { menu_category: { [Op.in]: ['샐러드'] } }, // 카테고리에 '샐러드'가 포함되어 있으면 샐러드이다.
      order: [['menu_price', 'desc']],
    });
    res.json(menus);
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage(req, res);
  }
});

menuRouter.get('/step/bread', async (req, res) => {
  try {
    const breads = await Breads.findAll({
      order: [['bread_id']],
    });
    res.json(breads);
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage(req, res);
  }
});
menuRouter.get('/step/cheese', async (req, res) => {
  try {
    const cheeses = await Cheeses.findAll({
      order: [['cheese_id']],
    });
    res.json(cheeses);
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage(req, res);
  }
});
menuRouter.get('/step/extras', async (req, res) => {
  try {
    const extras = await Extras.findAll({
      order: [['extras_id']],
    });
    res.json(extras);
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage(req, res);
  }
});
menuRouter.get('/step/vegetable', async (req, res) => {
  try {
    const vegetables = await Vegetables.findAll({
      order: [['vegetable_id']],
    });
    res.json(vegetables);
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage(req, res);
  }
});
menuRouter.get('/step/sauce', async (req, res) => {
  try {
    const sauces = await Sauces.findAll({
      order: [['sauce_id']],
    });
    res.json(sauces);
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage(req, res);
  }
});

menuRouter.get('/step/combo', async (req, res) => {
  try {
    const combos = await Combos.findAll();
    res.json(combos);
  } catch (error) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
    errMessage(req, res);
  }
});
module.exports = menuRouter;
