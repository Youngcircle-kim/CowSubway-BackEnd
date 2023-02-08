module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('cheese', [
      {
        cheese_id: 1,
        cheese_name_kr: '아메리칸 치즈',
        cheese_name_en: 'American Cheese',
        cheese_img: 'https://m.subway.co.kr/images/menu/img_recipe_c01.jpg',
      },
      {
        cheese_id: 2,
        cheese_name_kr: '슈레드 치즈',
        cheese_name_en: 'Shredded Cheese',
        cheese_img: 'https://m.subway.co.kr/images/menu/img_recipe_c02.jpg',
      },
      {
        cheese_id: 3,
        cheese_name_kr: '모짜렐라 치즈',
        cheese_name_en: 'Mozzarella Cheese',
        cheese_img: 'https://m.subway.co.kr/images/menu/img_recipe_c03.jpg',
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
