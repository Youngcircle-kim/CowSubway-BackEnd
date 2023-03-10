/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'combo',
      [
        {
          combo_id: 1, // 단품
          combo_name_kr: '단품',
          combo_name_en: 'Single',
          combo_price: 0,
          combo_img:
            'https://m.subway.co.kr/upload/menu/%EC%B9%98%ED%82%A8%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8A%A4%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98_20220804012537491.png',
        },
        {
          combo_id: 2, // 쿠키 세트
          combo_name_kr: '쿠키 세트',
          combo_name_en: 'Cookie Combo',
          combo_price: 1900,
          combo_img:
            'https://www.subway.co.kr/upload/menu/chocolate_chip_20210315021446423.jpg',
        },
        {
          combo_id: 3, // 웨지 감자 세트
          combo_name_kr: '웨지 감자 세트',
          combo_name_en: 'Wedge Potatoes Combo',
          combo_price: 3100,
          combo_img:
            'https://www.subway.co.kr/upload/menu/%EC%9B%A8%EC%A7%80%ED%8F%AC%ED%85%8C%EC%9D%B4%ED%86%A0_20220916104739353.jpg',
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
