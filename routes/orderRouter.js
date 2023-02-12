const express = require('express');

const orderRouter = express.Router();
const errMessage = require('../errMessage');

let orderItems = [];
let number = 0;
orderRouter.post('/order', (req, res, error) => {
  try {
    const data = req.body;
    const { payType } = data;
    const { totalPrice } = data;
    orderItems = data.orderItems;
    if (
      orderItems.length < 1 ||
      typeof payType === 'undefined' ||
      typeof totalPrice === 'undefined'
    ) {
      throw Object.assign(new Error(), { code: 400 });
    } else if (
      // eslint-disable-next-line no-dupe-else-if
      typeof payType !== 'undefined' &&
      typeof totalPrice !== 'undefined'
    ) {
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
    errMessage.outOfFormatException(req, res);
  }
});

module.exports = orderRouter;
