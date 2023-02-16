const resourceNotFoundException = (req, res) => {
  res.status(400).send({
    message: '리소스를 찾을 수 없습니다.',
  });
};

const outOfFormatException = (req, res) => {
  res.status(400).send({ success: false, message: '주문실패' });
};

module.exports = { resourceNotFoundException, outOfFormatException };
