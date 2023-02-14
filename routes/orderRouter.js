const { body, validationResult } = require('express-validator/check');
const express = require('express');
const { validatorErrorChecker } = require('../middleware/validator');
const Payments = require('../models/payment');
const OrderItems = require('../models/orderItems');
const Order = require('../models/order');

const orderRouter = express.Router();
let number = 0;

orderRouter.post(
  '/order',
  [
    body('payType').exists(),
    body('totalPrice').exists(),
    validatorErrorChecker,
  ],
  (req, res) => {
    console.log('im here');
    number += 1;
    const data = req.body;

    Order.create({
      order_number: number,
    }).then((_) => {
      console.log('Order');
    });
    Payments.create({
      payType: data.payType,
      method_id: data.method_id,
    }).then((_) => {
      console.log('payType');
    });
    OrderItems.create({
      orders_id: data.orders_id,
    }).then((_) => {
      console.log('order_id');
    });
    res.status(200).send({
      success: true,
      message: '주문성공',
      data: {
        waitingNumber: number,
      },
    });
  }
);

module.exports = orderRouter;
