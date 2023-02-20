const { body, validationResult } = require('express-validator');
const express = require('express');
const Payment = require('../models/payment');
// const OrderItems = require('../models/orderItems');
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
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    number += 1;
    const data = req.body;
    // console.log('number: ' + number);

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
    });

    const orderItem = data.orderItems; // post요청 데이터에서 상품들만 받아오기

    for (let i = 0; i < orderItem.length; i++) {
      let table = data.orderItems[i];
      await Items.create({
        bread_id: table.bread_id,
        menu_id: table.menu_id,
        cheese_id: table.cheese_id,
        combo_id: table.combo_id,
        price: table.price,
        count: table.count,
      }).then((items) => {
        // 채소, 토핑, 소스 id가 null인지 판별
        if (table.vegetable_id !== null) {
          // 배열일 경우
          for (let j = 0; j < table.vegetable_id.length; j++) {
            Items_vegetable.create({
              ItemItemId: items.item_id,
              VegetableVegetableId: table.vegetable_id[j],
            }).then(() => {
              console.log('채소 테이블 성공함 ㅇ');
            });
          }
        } else {
          // null값일 경우
          Items_vegetable.create({
            ItemItemId: items.item_id,
            VegetableVegetableId: null, // null 대신 0을 넣어줌(선택안함)
          }).then(() => {
            console.log('I_V테이블 성공함 ㅇ');
          });
        }

        if (table.topping_id !== null) {
          // 배열일 경우
          for (let k = 0; k < table.topping_id.length; k++) {
            Items_topping.create({
              ItemItemId: items.item_id,
              ToppingToppingId: table.topping_id[k],
            }).then(() => {
              console.log('I_V테이블 성공함 ㅇ');
            });
          }
        } else {
          // null값일 경우
          Items_topping.create({
            ItemItemId: items.item_id,
            ToppingToppingId: null, // null 대신 0을 넣어줌(선택안함)
          }).then(() => {
            console.log('토핑 테이블 성공함 ㅇ');
          });
        }
        if (table.sauce_id !== null) {
          for (let l = 0; l < table.sauce_id.length; l++) {
            Items_sauce.create({
              ItemItemId: items.item_id,
              SauceSauceId: table.sauce_id[l],
            }).then(() => {
              console.log('소스테이블 성공함 ㅇ');
            });
          }
        } else {
          // null값일 경우
          Items_sauce.create({
            ItemItemId: items.item_id,
            SauceSauceId: 1, // null 대신 0을 넣어줌(선택안함)
          }).then(() => {
            // Items_sauce.update(
            //   {
            //     SauceSauceId: null,
            //   },
            //   { where: {} }
            // );
            console.log('소스 테이블 성공함 ㅇ');
          });
        }
      });

      // itemNumber += 1;
    }

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
