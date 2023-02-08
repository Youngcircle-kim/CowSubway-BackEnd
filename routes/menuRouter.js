const express = require('express');
const Menus = require('../models/menu');
const Breads = require('../models/bread');

const menuRouter = express.Router();

menuRouter.get('/sandwich', async (req, res) => {
  try {
    const menus = await Menus.findAll({
      order: [['menu_15cm_price', 'DESC']],
    });
    res.json(menus);
  } catch (error) {
    console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
    res.status(400).send({
      errorMessage: '형식이 잘못됐습니다.',
    });
  }
});
menuRouter.get('/step/bread', async (req, res) => {
  try {
    const breads = await Breads.findAll({
      order: [['bread_id']],
    });
    res.json(breads);
  } catch (error) {
    console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
    res.status(400).send({
      errorMessage: '형식이 잘못됐습니다.',
    });
  }
});
module.exports = menuRouter;
