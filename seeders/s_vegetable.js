module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('vegetable', [
      {
        vegetable_id: 0,
        vegetable_name_kr: '선택 안함',
        vegetable_name_en: 'Nothing',
        vegetable_img:
          'https://cdn-pro-web-247-254.cdn-nhncommerce.com/seoul3tr4692_godomall_com/data/add_goods/20/04/1000000743/1000000743_34.png',
      },
      {
        vegetable_id: 1,
        vegetable_name_kr: '양상추',
        vegetable_name_en: 'Lettuce',
        vegetable_img:
          'https://www.subway.co.kr/images/menu/img_recipe_v01.jpg',
      },
      {
        vegetable_id: 2,
        vegetable_name_kr: '토마토',
        vegetable_name_en: 'Tomatoes',
        vegetable_img:
          'https://www.subway.co.kr/images/menu/img_recipe_v02.jpg',
      },
      {
        vegetable_id: 3,
        vegetable_name_kr: '오이',
        vegetable_name_en: 'Cucumbers',
        vegetable_img:
          'https://www.subway.co.kr/images/menu/img_recipe_v03.jpg',
      },
      {
        vegetable_id: 4,
        vegetable_name_kr: '피망',
        vegetable_name_en: 'Peppers',
        vegetable_img:
          'https://www.subway.co.kr/images/menu/img_recipe_v04.jpg',
      },
      {
        vegetable_id: 5,
        vegetable_name_kr: '양파',
        vegetable_name_en: 'Red Onions',
        vegetable_img:
          'https://www.subway.co.kr/images/menu/img_recipe_v05.jpg',
      },
      {
        vegetable_id: 6,
        vegetable_name_kr: '피클',
        vegetable_name_en: 'Pickles',
        vegetable_img:
          'https://www.subway.co.kr/images/menu/img_recipe_v06.jpg',
      },
      {
        vegetable_id: 7,
        vegetable_name_kr: '올리브',
        vegetable_name_en: 'Olives',
        vegetable_img:
          'https://www.subway.co.kr/images/menu/img_recipe_v07.jpg',
      },
      {
        vegetable_id: 8,
        vegetable_name_kr: '할라피뇨',
        vegetable_name_en: 'Jalapenos',
        vegetable_img:
          'https://www.subway.co.kr/images/menu/img_recipe_v08.jpg',
      },
      {
        vegetable_id: 9,
        vegetable_name_kr: '아보카도',
        vegetable_name_en: 'Avocado',
        vegetable_img:
          'https://www.subway.co.kr/images/menu/img_recipe_v09.jpg',
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
