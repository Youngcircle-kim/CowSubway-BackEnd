const { body, validationResult } = require('express-validator/check');
const express = require('express');
const Payments = require('../models/payment');
const OrderItems = require('../models/orderItems');
const Order = require('../models/order');
const Place = require('../models/place');

const orderRouter = express.Router();
let number = 0;

orderRouter.post(
  '/order',
  [
    body('place_id').exists(),
    body('payType').exists(),
    body('orders_id').exists(),
    body('order_price').exists(),
    body('orderItems').exists(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    number += 1;
    const data = req.body;
    console.log(data);

    Order.create({
      order_number: number, // 주문 번호
      order_price: data.order_price, // 총 주문 가격
      place_id: data.place_id, // 식사 장소
    }).then(() => {
      console.log('Order');
    });
    Payments.create({
      payType: data.payType, // 결제 식별자
      method_id: data.method_id, // 결제 방식
      payment_price: data.order_price,
    }).then((_) => {
      console.log('payType');
    });
    OrderItems.create({
      orders_id: data.orders_id, // 주문 상품들의 식별자(고객별로 구분)
      order_number: number,
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
