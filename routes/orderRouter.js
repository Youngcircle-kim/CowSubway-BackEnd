const { body, validationResult } = require('express-validator/check');
const express = require('express');
const Payment = require('../models/payment');
const OrderItems = require('../models/orderItems');
const Order = require('../models/order');
const Place = require('../models/place');
const Items = require('../models/items');

const orderRouter = express.Router();
let number = 0;

orderRouter.post(
  '/order',
  [
    body('order_price').exists(),
    body('place_id').exists(),
    body('payType').exists(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    number += 1;
    const data = req.body;
    console.log(number);

    Order.create({
      order_number: number, // 주문 번호
      order_price: data.order_price, // 총 주문 가격
      place_id: data.place_id, // 식사 장소
    }).then(() => {
      console.log('Order');
    });
    Payment.create({
      payment_id: number, // 결제 기록 식별자
      payType: data.payType, // 결제 방식 식별자
      payment_price: data.order_price,
    }).then((_) => {
      console.log('payType');
    });
    OrderItems.create({
      orders_id: number, // 주문 상품들의 식별자(고객별로 구분)
      //위에거 수정해야대
      // order_number: number,
    }).then((_) => {
      console.log('order_id');
    });
    // Items.create();
    let orderItems = [];
    orderItems = data.orderItems;
    for (let i = 0; i < orderItems.length; i++) {
      Items.create({ item_id: orderItems[i].item_id });
      Items.create({ menu_id: orderItems[i].menu_id });
      Items.create({ bread_id: orderItems[i].bread_id });
      Items.create({ cheese_id: orderItems[i].cheese_id });
      Items.create({ topping_id: orderItems[i].topping_id });
      Items.create({ combo_id: orderItems[i].combo_id });
      Items.create({ price: orderItems[i].price });
      Items.create({ count: orderItems[i].count });
    }
    console.log('here');

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
