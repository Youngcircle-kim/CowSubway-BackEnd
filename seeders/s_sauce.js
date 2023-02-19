'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'sauce',
      [
        {
          sauce_id: 1,
          sauce_name_kr: '랜치',
          sauce_name_en: 'Ranch',
          sauce_img: 'https://www.subway.co.kr/images/menu/img_recipe_s01.jpg',
        },
        {
          sauce_id: 2,
          sauce_name_kr: '마요네즈',
          sauce_name_en: 'Mayonnaise',
          sauce_img: 'https://www.subway.co.kr/images/menu/img_recipe_s02.jpg',
        },
        {
          sauce_id: 3,
          sauce_name_kr: '스위트 어니언',
          sauce_name_en: 'Sweet Onion',
          sauce_img: 'https://www.subway.co.kr/images/menu/img_recipe_s07.jpg',
        },
        {
          sauce_id: 4,
          sauce_name_kr: '허니 머스타드',
          sauce_name_en: 'Honey Mustard',
          sauce_img: 'https://www.subway.co.kr/images/menu/img_recipe_s03.jpg',
        },
        {
          sauce_id: 5,
          sauce_name_kr: '스위트 칠리',
          sauce_name_en: 'Sweet Chilli',
          sauce_img: 'https://www.subway.co.kr/images/menu/img_recipe_s12.jpg',
        },
        {
          sauce_id: 6,
          sauce_name_kr: '핫 칠리',
          sauce_name_en: 'Hot Chilli',
          sauce_img: 'https://www.subway.co.kr/images/menu/img_recipe_s18.jpg',
        },
        {
          sauce_id: 7,
          sauce_name_kr: '사우스웨스트 치폴레',
          sauce_name_en: 'Southwest Chipotle',
          sauce_img: 'https://www.subway.co.kr/images/menu/img_recipe_s09.jpg',
        },
        {
          sauce_id: 8,
          sauce_name_kr: '머스타드',
          sauce_name_en: 'Yellow Mustard',
          sauce_img: 'https://www.subway.co.kr/images/menu/img_recipe_s11.jpg',
        },
        {
          sauce_id: 9,
          sauce_name_kr: '홀스래디쉬',
          sauce_name_en: 'Horseradish',
          sauce_img: 'https://www.subway.co.kr/images/menu/img_recipe_s04.jpg',
        },
        {
          sauce_id: 10,
          sauce_name_kr: '올리브 오일',
          sauce_name_en: 'Olive Oil',
          sauce_img: 'https://www.subway.co.kr/images/menu/img_recipe_s06.jpg',
        },
        {
          sauce_id: 11,
          sauce_name_kr: '레드와인식초',
          sauce_name_en: 'Red Wine Vinaigrette',
          sauce_img: 'https://www.subway.co.kr/images/menu/img_recipe_s05.jpg',
        },
        {
          sauce_id: 12,
          sauce_name_kr: '소금',
          sauce_name_en: 'Salt',
          sauce_img: 'https://www.subway.co.kr/images/menu/img_recipe_s13.jpg',
        },
        {
          sauce_id: 13,
          sauce_name_kr: '후추',
          sauce_name_en: 'Black Pepper',
          sauce_img: 'https://www.subway.co.kr/images/menu/img_recipe_s14.jpg',
        },
        {
          sauce_id: 14,
          sauce_name_kr: '스모크 바비큐',
          sauce_name_en: 'Smoke BBQ',
          sauce_img: 'https://www.subway.co.kr/images/menu/img_recipe_s17.jpg',
        },
        {
          sauce_id: 15,
          sauce_name_kr: '이탈리안 드레싱',
          sauce_name_en: 'Italian Dressing',
          sauce_img:
            'https://www.subway.co.kr/upload/menu/sauce_italian_dressing.png',
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
