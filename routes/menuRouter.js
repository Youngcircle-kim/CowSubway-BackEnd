const express = require('express');
const Menus = require('../models/menu');
const Breads = require('../models/bread');
const Cheeses = require('../models/cheese');
const Extras = require('../models/extras');
const Vegetables = require('../models/vegetable');
const Sauces = require('../models/sauce');

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
menuRouter.get('/step/cheese', async (req, res) => {
  try {
    const cheeses = await Cheeses.findAll({
      order: [['cheese_id']],
    });
    res.json(cheeses);
  } catch (error) {
    console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
    res.status(400).send({
      errorMessage: '형식이 잘못됐습니다.',
    });
  }
});
menuRouter.get('/step/extras', async (req, res) => {
  try {
    const extras = await Extras.findAll({
      order: [['extras_id']],
    });
    res.json(extras);
  } catch (error) {
    console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
    res.status(400).send({
      errorMessage: '형식이 잘못됐습니다.',
    });
  }
});
menuRouter.get('/step/vegetable', async (req, res) => {
  try {
    const vegetables = await Vegetables.findAll({
      order: [['vegetable_id']],
    });
    res.json(vegetables);
  } catch (error) {
    console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
    res.status(400).send({
      errorMessage: '형식이 잘못됐습니다.',
    });
  }
});
menuRouter.get('/step/sauce', async (req, res) => {
  try {
    const sauces = await Sauces.findAll({
      order: [['sauce_id']],
    });
    res.json(sauces);
  } catch (error) {
    console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
    res.status(400).send({
      errorMessage: '형식이 잘못됐습니다.',
    });
  }
});
module.exports = menuRouter;
