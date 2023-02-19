'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'topping',
      [
        {
          topping_id: 0,
          topping_name_kr: '선택 안함',
          topping_name_en: 'Nothing',
          topping_img:
            'https://cdn-pro-web-247-254.cdn-nhncommerce.com/seoul3tr4692_godomall_com/data/add_goods/20/04/1000000743/1000000743_34.png',
          topping_price: 0,
        },

        {
          topping_id: 1,
          topping_name_kr: '미트 추가',
          topping_name_en: 'Meat',
          topping_img:
            'https://www.subway.co.kr/upload/menu/img_toppping_01.png',
          topping_price: 3000,
        },
        {
          topping_id: 2,
          topping_name_kr: '에그마요',
          topping_name_en: 'Egg Mayo',
          topping_img:
            'https://www.subway.co.kr/upload/menu/img_toppping_02.png',
          topping_price: 2000,
        },
        {
          topping_id: 3,
          topping_name_kr: '베이컨',
          topping_name_en: 'Bacon',
          topping_img:
            'https://www.subway.co.kr/upload/menu/img_toppping_05.png',
          topping_price: 1500,
        },
        {
          topping_id: 4,
          topping_name_kr: '치즈 추가',
          topping_name_en: 'Cheese',
          topping_img: 'https://www.subway.co.kr/upload/menu/recipe_cheese.jpg',
          topping_price: 1400,
        },
        {
          topping_id: 5,
          topping_name_kr: '아보카도',
          topping_name_en: 'Avocado',
          topping_img:
            'https://www.subway.co.kr/upload/menu/img_toppping_04.png',
          topping_price: 1500,
        },
        {
          topping_id: 6,
          topping_name_kr: '오믈렛',
          topping_name_en: 'Omelet',
          topping_img:
            'https://www.subway.co.kr/upload/menu/img_toppping_03.png',
          topping_price: 1800,
        },
        {
          topping_id: 7,
          topping_name_kr: '페퍼로니',
          topping_name_en: 'Pepperoni',
          topping_img:
            'https://www.subway.co.kr/upload/menu/recipe_pepperoni.jpg',
          topping_price: 1400,
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
