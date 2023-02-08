module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bread', [
      {
        bread_id: 1,
        bread_name_kr: '허니오트',
        bread_name_en: 'Honey Oat',
        bread_img: 'https://m.subway.co.kr/images/menu/img_recipe_b01.jpg',
      },
      {
        bread_id: 2,
        bread_name_kr: '하티',
        bread_name_en: 'Hearty Italian',
        bread_img: 'https://m.subway.co.kr/images/menu/img_recipe_b02.jpg',
      },
      {
        bread_id: 3,
        bread_name_kr: '위트',
        bread_name_en: 'Wheat',
        bread_img: 'https://m.subway.co.kr/images/menu/img_recipe_b03.jpg',
      },
      {
        bread_id: 4,
        bread_name_kr: '파마산 오레가노',
        bread_name_en: 'Parmesan Oregano',
        bread_img: 'https://m.subway.co.kr/images/menu/img_recipe_b04.jpg',
      },
      {
        bread_id: 5,
        bread_name_kr: '화이트',
        bread_name_en: 'White',
        bread_img: 'https://m.subway.co.kr/images/menu/img_recipe_b05.jpg',
      },
      {
        bread_id: 6,
        bread_name_kr: '플랫브레드',
        bread_name_en: 'Flat Bread',
        bread_img: 'https://m.subway.co.kr/images/menu/img_recipe_b06.jpg',
      },
    ]);
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
