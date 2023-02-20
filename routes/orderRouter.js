const { body, validationResult } = require('express-validator');
const express = require('express');
const Payment = require('../models/payment');
const OrderItems = require('../models/orderItems');
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
    console.log('number: ' + number);

    await Order.create({
      order_number: number, // 주문 번호
      order_price: data.order_price, // 총 주문 가격
      place_id: data.place_id, // 식사 장소
    }).then(() => {
      console.log('Order');
    });
    await Payment.create({
      payment_id: number, // 결제 기록 식별자
      payType: data.payType, // 결제 방식 식별자
      payment_price: data.order_price,
    }).then((_) => {
      console.log('payType');
    });
    await OrderItems.create({
      orders_id: number, // 주문 상품들의 식별자(고객별로 구분)
      //위에거 수정해야댄
      order_number: number,
    }).then((_) => {
      console.log('order_id');
    });

    const orderItem = data.orderItems;
    console.log('배열길이: ' + orderItem.length);
    let itemNumber = 1;

    for (let i = 0; i < orderItem.length; i++) {
      let table = data.orderItems[i];
      await Items.create({
        item_id: itemNumber,
        orders_id: number,
        bread_id: table.bread_id,
        menu_id: table.menu_id,
        cheese_id: table.cheese_id,
        combo_id: table.combo_id,
        price: table.price,
        count: table.count,
      }).then(() => {
        console.log('Items테이블 성공함 ㅇ');
      });
      // 채소, 토핑, 소스 id가 null인지 판별
      if (table.vegetable_id !== null) {
        // 배열일 경우
        for (let j = 0; j < table.vegetable_id.length; j++) {
          await Items_vegetable.create({
            ItemItemId: itemNumber,
            VegetableVegetableId: table.vegetable_id[j],
          }).then(() => {
            console.log('채소 테이블 성공함 ㅇ');
          });
        }
      } else {
        // null값일 경우
        await Items_vegetable.create({
          ItemItemId: itemNumber,
          VegetableVegetableId: 0, // null 대신 0을 넣어줌(선택안함)
        }).then(() => {
          console.log('I_V테이블 성공함 ㅇ');
        });
      }

      if (table.topping_id !== null) {
        // 배열일 경우
        for (let k = 0; k < table.topping_id.length; k++) {
          await Items_topping.create({
            ItemItemId: itemNumber,
            ToppingToppingId: table.topping_id[k],
          }).then(() => {
            console.log('I_V테이블 성공함 ㅇ');
          });
        }
      } else {
        // null값일 경우
        await Items_topping.create({
          ItemItemId: itemNumber,
          ToppingToppingId: 0, // null 대신 0을 넣어줌(선택안함)
        }).then(() => {
          console.log('토핑 테이블 성공함 ㅇ');
        });
      }
      if (table.sauce_id !== null) {
        for (let l = 0; l < table.sauce_id.length; l++) {
          await Items_sauce.create({
            ItemItemId: itemNumber,
            SauceSauceId: table.sauce_id[l],
          }).then(() => {
            console.log('소스테이블 성공함 ㅇ');
          });
        }
      } else {
        // null값일 경우
        await Items_sauce.create({
          ItemItemId: itemNumber,
          SauceSauceId: 0, // null 대신 0을 넣어줌(선택안함)
        }).then(() => {
          console.log('소스 테이블 성공함 ㅇ');
        });
      }
      itemNumber += 1;
    }
    // s;
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
