const express = require('express');

const orderRouter = express.Router();

let orderItems = [];
let number = 0;
orderRouter.post('/order', (req, res, error) => {
  const data = req.body;
  // const { payType } = data.payType;
  // const { totalPrice } = data.totalPrice;
  orderItems = data.orderItems;
  try {
    if (orderItems.length === 0) {
      res.status(400).send('형식이 잘못되었습니다.');
    } else {
      number += 1;
      res.status(200).send({
        success: true,
        message: '주문성공',
        data: {
          waitingNumber: number,
        },
      });
    }
  } catch (err) {
    console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
  }
});

module.exports = orderRouter;
