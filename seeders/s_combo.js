/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'combo',
      [
        {
          combo_id: 1, // 단품
          combo_name: '단품',
          combo_price: 0,
          combo_img:
            'https://m.subway.co.kr/upload/menu/%EC%B9%98%ED%82%A8%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8A%A4%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98_20220804012537491.png',
        },
        {
          combo_id: 2, // 쿠키 세트
          combo_name: '쿠키 세트',
          combo_price: 1900,
          combo_img:
            'https://o.remove.bg/downloads/43db10f6-dd11-4dbc-93f2-efe611df4c0d/B-removebg-preview.png',
        },
        {
          combo_id: 3, // 웨지 감자 세트
          combo_name: '웨지 감자 세트',
          combo_price: 3100,
          combo_img:
            'https://o.remove.bg/downloads/f2190076-07e3-4791-892b-7a25357e8411/24ea088be6-removebg-preview.png',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
