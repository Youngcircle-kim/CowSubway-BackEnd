const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createPool({
  host: '127.0.0.1', // 호스트
  user: 'root', // 데이터베이스 계정
  password: '0000', // 데이터베이스 비밀번호
  database: 'subway', // 사용할 데이터베이스
});

// 장바구니 읽기

// 장바구니 조회
router.get('/', (req, res) => {
  const sqlQuery = 'SELECT * FROM subway.items;';
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// 장바구니 추가 (몰루)

// 장바구니 삭제

module.exports = router;
