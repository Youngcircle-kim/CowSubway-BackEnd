const express = require('express');
const SandwichController = require('../controller/sandwichController');
const SaladController = require('../controller/saladController');
const BreadController = require('../controller/breadController');
const VegetableController = require('../controller/vegetableController');
const CheeseController = require('../controller/cheeseController');
const ExtraController = require('../controller/extraController');
const SauceController = require('../controller/sauceController');
const ComboController = require('../controller/comboController');

const menuRouter = express.Router();

const errMessage = (req, res) => {
  res.status(400).send({
    errorMessage: '리소스를 찾을 수 없습니다.',
  });
};

menuRouter.get('/menu/sandwich', SandwichController);

menuRouter.get('/menu/salad', SaladController);

menuRouter.get('/step/bread', BreadController);

menuRouter.get('/step/cheese', CheeseController);

menuRouter.get('/step/extras', ExtraController);

menuRouter.get('/step/vegetable', VegetableController);

menuRouter.get('/step/sauce', SauceController);

menuRouter.get('/step/combo', ComboController);

module.exports = menuRouter;
