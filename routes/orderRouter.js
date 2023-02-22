const { body, validationResult } = require('express-validator');
const express = require('express');
const Payment = require('../models/payment');
const Order = require('../models/order');
const Items = require('../models/items');
const Items_vegetable = require('../models/items_vegetable');
const Items_topping = require('../models/items_topping');
const Items_sauce = require('../models/items_sauce');

const orderRouter = express.Router();
let number = 0;

orderRouter.post(
  '/order',
  [
    body('order_price').exists(),
    body('place_id').exists(),
    body('payType').exists(),
    body('orderItems').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    number += 1;
    const data = req.body; // post요청 데이터
    const orderItem = data.orderItems; // post요청 데이터에서 상품들만 받아오기

    await Order.create({
      // 주문 번호 자동 증가
      order_price: data.order_price, // 총 주문 가격
      place_id: data.place_id, // 식사 장소
    }).then((order) => {
      Payment.create({
        order_number: order.order_number,
        payType: data.payType, // 결제 방식 식별자
        payment_price: data.order_price,
      }).then(() => {
        console.log('payType성공');
      });
      console.log('Order성공');

      for (let i = 0; i < orderItem.length; i++) {
        let table = data.orderItems[i];
        Items.create({
          order_number: order.order_number,
          bread_id: table.breadId,
          menu_id: table.menuId,
          cheese_id: table.cheeseId,
          combo_id: table.comboId,
          price: table.price,
          count: table.count,
        }).then((items) => {
          // 채소, 토핑, 소스 id가 null인지 판별
          if (table.vegetableId !== null) {
            // 배열일 경우
            for (let j = 0; j < table.vegetableId.length; j++) {
              Items_vegetable.create({
                ItemItemId: items.item_id,
                VegetableVegetableId: table.vegetableId[j],
              }).then(() => {
                console.log('채소 테이블 성공함 ㅇ');
              });
            }
          } else {
            // null값일 경우
            Items_vegetable.create({
              ItemItemId: items.item_id,
              VegetableVegetableId: 0, // null 대신 0을 넣어줌(선택안함)
            }).then(() => {
              console.log('채소 테이블 null 성공');
            });
          }

          if (table.toppingId !== null) {
            // 배열일 경우
            for (let k = 0; k < table.toppingId.length; k++) {
              Items_topping.create({
                ItemItemId: items.item_id,
                ToppingToppingId: table.toppingId[k],
              }).then(() => {
                console.log('토핑 테이블 성공함 ㅇ');
              });
            }
          } else {
            // null값일 경우
            Items_topping.create({
              ItemItemId: items.item_id,
              ToppingToppingId: 0, // null 대신 0을 넣어줌(선택안함)
            }).then(() => {
              console.log('토핑 테이블 null 성공함 ㅇ');
            });
          }
          if (table.sauceId !== null) {
            for (let l = 0; l < table.sauceId.length; l++) {
              Items_sauce.create({
                ItemItemId: items.item_id,
                SauceSauceId: table.sauceId[l],
              }).then(() => {
                console.log('소스테이블 성공함 ㅇ');
              });
            }
          } else {
            // null값일 경우
            Items_sauce.create({
              ItemItemId: items.item_id,
              SauceSauceId: 0, // null 대신 0을 넣어줌(선택안함)
            }).then(() => {
              console.log('소스 테이블 성공함 ㅇ');
            });
          }
        });
      }
    });
    res.status(200).send({
      success: true,
      message: '주문 성공',
      data: {
        waitingNumber: number,
      },
    });
  }
);

module.exports = orderRouter;
