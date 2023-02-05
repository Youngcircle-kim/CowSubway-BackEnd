'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'extras',
      [
        {
          extras_id: 1,
          extras_name_kr: '미트 추가',
          extras_name_en: 'Meat',
          extras_img:
            'https://www.subway.co.kr/upload/menu/img_toppping_01.png',
          extras_price: 3000,
        },
        {
          extras_id: 2,
          extras_name_kr: '에그마요',
          extras_name_en: 'Egg Mayo',
          extras_img:
            'https://www.subway.co.kr/upload/menu/img_toppping_02.png',
          extras_price: 2000,
        },
        {
          extras_id: 3,
          extras_name_kr: '베이컨',
          extras_name_en: 'Bacon',
          extras_img:
            'https://www.subway.co.kr/upload/menu/img_toppping_05.png',
          extras_price: 1500,
        },
        {
          extras_id: 4,
          extras_name_kr: '치즈 추가',
          extras_name_en: 'Cheese',
          extras_img: 'https://www.subway.co.kr/upload/menu/recipe_cheese.jpg',
          extras_price: 1400,
        },
        {
          extras_id: 5,
          extras_name_kr: '아보카도',
          extras_name_en: 'Avocado',
          extras_img:
            'https://www.subway.co.kr/upload/menu/img_toppping_04.png',
          extras_price: 1500,
        },
        {
          extras_id: 6,
          extras_name_kr: '오믈렛',
          extras_name_en: 'Omelet',
          extras_img:
            'https://www.subway.co.kr/upload/menu/img_toppping_03.png',
          extras_price: 1800,
        },
        {
          extras_id: 7,
          extras_name_kr: '페퍼로니',
          extras_name_en: 'Pepperoni',
          extras_img:
            'https://www.subway.co.kr/upload/menu/recipe_pepperoni.jpg',
          extras_price: 1400,
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
