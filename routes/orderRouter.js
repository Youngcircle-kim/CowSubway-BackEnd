// const express = require('express');

// const orderRouter = express.Router();
// const errMessage = require('../errMessage');
// const { body, validationResult } = require('express-validator');

// let orderItems = [];
// let number = 0;
// orderRouter.post(
//   '/order',
//   console.log(body),
//   body('payType').exists(),
//   body('totalPrice').exists(),
//   (req, res) => {
//     // try {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     } else {
//       number += 1;
//       res.status(200).send({
//         success: true,
//         message: '주문성공',
//         data: {
//           waitingNumber: number,
//         },
//       });
//     }
//     // DB에 삽입하는 콜백함수 작성 요망
//     // const data = req.body;
//     // const { payType } = data;
//     // const { totalPrice } = data;
//     // orderItems = data.orderItems;
//     // if (orderItems.length < 1) {
//     //   throw Object.assign(new Error(), { code: 400 });
//     // }
//     //  if (
//     //   // eslint-disable-next-line no-dupe-else-if
//     //   typeof payType !== 'undefined' &&
//     //   typeof totalPrice !== 'undefined'
//     // )

//     // } catch (err) {
//     //   console.error(`${req.method} ${req.originalUrl} : ${error.message}`);
//     //   errMessage.outOfFormatException(req, res);
//     // }
//   }
// );

// module.exports = orderRouter;
