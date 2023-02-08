module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('menu', [
      {
        menu_id: 1,
        menu_category: '15cm',
        menu_name_kr: '베지',
        menu_name_en: 'Veggie',
        menu_kcal: 209,
        menu_price: 3900,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Veggie-Delite_20211231095658375.png',
      },
      {
        menu_id: 2,
        menu_category: '30cm',
        menu_name_kr: '베지',
        menu_name_en: 'Veggie',
        menu_kcal: 209,
        menu_price: 7400,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Veggie-Delite_20211231095658375.png',
      },
      {
        menu_id: 3,
        menu_category: '샐러드',
        menu_name_kr: '베지',
        menu_name_en: 'Veggie',
        menu_kcal: 46,
        menu_price: 5600,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Veggie-Delite_20211231095658375.png',
      },
      {
        menu_id: 4,
        menu_category: '15cm',
        menu_name_kr: '에그마요',
        menu_name_en: 'Egg Mayo',
        menu_kcal: 416,
        menu_price: 4300,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Egg-Mayo_20211231094817112.png',
      },
      {
        menu_id: 5,
        menu_category: '30cm',
        menu_name_kr: '에그마요',
        menu_name_en: 'Egg Mayo',
        menu_kcal: 416,
        menu_price: 8000,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Egg-Mayo_20211231094817112.png',
      },
      {
        menu_id: 6,
        menu_category: '샐러드',
        menu_name_kr: '에그마요',
        menu_name_en: 'Egg Mayo',
        menu_kcal: 254,
        menu_price: 6000,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Egg-Mayo_20211231094817112.png',
      },
      {
        menu_id: 7,
        menu_category: '15cm',
        menu_name_kr: '참치',
        menu_name_en: 'Tuna',
        menu_kcal: 316,
        menu_price: 4800,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Tuna_20211231095535268.png',
      },
      {
        menu_id: 8,
        menu_category: '30cm',
        menu_name_kr: '참치',
        menu_name_en: 'Tuna',
        menu_kcal: 316,
        menu_price: 8700,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Tuna_20211231095535268.png',
      },
      {
        menu_id: 9,
        menu_category: '샐러드',
        menu_name_kr: '참치',
        menu_name_en: 'Tuna',
        menu_kcal: 153,
        menu_price: 6500,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Tuna_20211231095535268.png',
      },
      {
        menu_id: 10,
        menu_category: '15cm',
        menu_name_kr: '햄',
        menu_name_en: 'Ham',
        menu_kcal: 262,
        menu_price: 4800,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Ham_20211231094833168.png',
      },
      {
        menu_id: 11,
        menu_category: '30cm',
        menu_name_kr: '햄',
        menu_name_en: 'Ham',
        menu_kcal: 262,
        menu_price: 8700,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Ham_20211231094833168.png',
      },
      {
        menu_id: 12,
        menu_category: '샐러드',
        menu_name_kr: '햄',
        menu_name_en: 'Ham',
        menu_kcal: 100,
        menu_price: 6500,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Ham_20211231094833168.png',
      },
      {
        menu_id: 13,
        menu_category: '15cm',
        menu_name_kr: '치킨 슬라이스',
        menu_name_en: 'Chicken Slice',
        menu_kcal: 265,
        menu_price: 5900,
        menu_img:
          'https://m.subway.co.kr/upload/menu/%EC%B9%98%ED%82%A8%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8A%A4%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98_20220804012537491.png',
      },
      {
        menu_id: 14,
        menu_category: '30cm',
        menu_name_kr: '치킨 슬라이스',
        menu_name_en: 'Chicken Slice',
        menu_kcal: 265,
        menu_price: 11000,
        menu_img:
          'https://m.subway.co.kr/upload/menu/%EC%B9%98%ED%82%A8%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8A%A4%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98_20220804012537491.png',
      },
      {
        menu_id: 15,
        menu_category: '샐러드',
        menu_name_kr: '치킨 슬라이스',
        menu_name_en: 'Chicken Slice',
        menu_kcal: 103,
        menu_price: 7600,
        menu_img:
          'https://m.subway.co.kr/upload/menu/%EC%B9%98%ED%82%A8%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8A%A4%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98_20220804012537491.png',
      },
      {
        menu_id: 16,
        menu_category: '15cm',
        menu_name_kr: '비엘티',
        menu_name_en: 'B.L.T.',
        menu_kcal: 300,
        menu_price: 5400,
        menu_img:
          'https://m.subway.co.kr/upload/menu/B.L.T_20211231094744175.png',
      },
      {
        menu_id: 17,
        menu_category: '30cm',
        menu_name_kr: '비엘티',
        menu_name_en: 'B.L.T.',
        menu_kcal: 300,
        menu_price: 9500,
        menu_img:
          'https://m.subway.co.kr/upload/menu/B.L.T_20211231094744175.png',
      },
      {
        menu_id: 18,
        menu_category: '샐러드',
        menu_name_kr: '비엘티',
        menu_name_en: 'B.L.T.',
        menu_kcal: 153,
        menu_price: 7100,
        menu_img:
          'https://m.subway.co.kr/upload/menu/B.L.T_20211231094744175.png',
      },
      {
        menu_id: 19,
        menu_category: '15cm',
        menu_name_kr: '스파이시 이탈리안',
        menu_name_en: 'Spicy Italian',
        menu_kcal: 464,
        menu_price: 5700,
        menu_img:
          'https://m.subway.co.kr/upload/menu/spicy_italian_20211231095435532.png',
      },
      {
        menu_id: 20,
        menu_category: '30cm',
        menu_name_kr: '스파이시 이탈리안',
        menu_name_en: 'Spicy Italian',
        menu_kcal: 464,
        menu_price: 10100,
        menu_img:
          'https://m.subway.co.kr/upload/menu/spicy_italian_20211231095435532.png',
      },
      {
        menu_id: 21,
        menu_category: '샐러드',
        menu_name_kr: '스파이시 이탈리안',
        menu_name_en: 'Spicy Italian',
        menu_kcal: 302,
        menu_price: 7400,
        menu_img:
          'https://m.subway.co.kr/upload/menu/spicy_italian_20211231095435532.png',
      },
      {
        menu_id: 22,
        menu_category: '15cm',
        menu_name_kr: '치킨 데리야끼',
        menu_name_en: 'Chicken Teriyaki',
        menu_kcal: 314,
        menu_price: 5700,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Chicken-Teriyaki_20211231094803381.png',
      },
      {
        menu_id: 23,
        menu_category: '30cm',
        menu_name_kr: '치킨 데리야끼',
        menu_name_en: 'Chicken Teriyaki',
        menu_kcal: 314,
        menu_price: 10100,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Chicken-Teriyaki_20211231094803381.png',
      },
      {
        menu_id: 24,
        menu_category: '샐러드',
        menu_name_kr: '치킨 데리야끼',
        menu_name_en: 'Chicken Teriyaki',
        menu_kcal: 152,
        menu_price: 7400,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Chicken-Teriyaki_20211231094803381.png',
      },
      {
        menu_id: 25,
        menu_category: '15cm',
        menu_name_kr: '쉬림프',
        menu_name_en: 'Shrimp',
        menu_kcal: 229,
        menu_price: 5900,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Shrimp_20211231095411189.png',
      },
      {
        menu_id: 26,
        menu_category: '30cm',
        menu_name_kr: '쉬림프',
        menu_name_en: 'Shrimp',
        menu_kcal: 229,
        menu_price: 10300,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Shrimp_20211231095411189.png',
      },
      {
        menu_id: 27,
        menu_category: '샐러드',
        menu_name_kr: '쉬림프',
        menu_name_en: 'Shrimp',
        menu_kcal: 66,
        menu_price: 7600,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Shrimp_20211231095411189.png',
      },
      {
        menu_id: 28,
        menu_category: '15cm',
        menu_name_kr: '로스트 치킨',
        menu_name_en: 'Roasted Chicken',
        menu_kcal: 300,
        menu_price: 6100,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Roasted-Chicken_20211231095032718.png',
      },
      {
        menu_id: 29,
        menu_category: '30cm',
        menu_name_kr: '로스트 치킨',
        menu_name_en: 'Roasted Chicken',
        menu_kcal: 300,
        menu_price: 10700,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Roasted-Chicken_20211231095032718.png',
      },
      {
        menu_id: 30,
        menu_category: '샐러드',
        menu_name_kr: '로스트 치킨',
        menu_name_en: 'Roasted Chicken',
        menu_kcal: 300,
        menu_price: 7800,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Roasted-Chicken_20211231095032718.png',
      },
      {
        menu_id: 11,
        menu_category: '15cm',
        menu_name_kr: '로티세리 바베큐 치킨',
        menu_name_en: 'Rotisserie Barbecue Chicken',
        menu_kcal: 327,
        menu_15cm_price: 6100,
        menu_30cm_price: 10700,
        menu_salad_price: 7800,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Rotisserie-Barbecue-Chicken_20211231023137878.png',
      },
      {
        menu_id: 12,
        menu_name_kr: '치킨 베이컨 아보카도',
        menu_name_en: 'Chicken Bacon Avocado',
        menu_kcal: 355,
        menu_15cm_price: 7400,
        menu_30cm_price: 13800,
        menu_salad_price: 9100,
        menu_img:
          'https://m.subway.co.kr/upload/menu/%EC%B9%98%ED%82%A8%EB%B2%A0%EC%9D%B4%EC%BB%A8%EC%95%84%EB%B3%B4%EC%B9%B4%EB%8F%84%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98_20220804012954461.png',
      },
      {
        menu_id: 13,
        menu_name_kr: '스테이크 & 치즈',
        menu_name_en: 'Steak & Cheese',
        menu_kcal: 355,
        menu_15cm_price: 6500,
        menu_30cm_price: 11300,
        menu_salad_price: 8200,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Steak-&-Cheese_20211231095455613.png',
      },
      {
        menu_id: 14,
        menu_name_kr: '서브웨이 클럽',
        menu_name_en: 'Subway Club',
        menu_kcal: 299,
        menu_15cm_price: 5900,
        menu_30cm_price: 10300,
        menu_salad_price: 7600,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Subway-Club%E2%84%A2_20211231095518589.png',
      },
      {
        menu_id: 15,
        menu_name_kr: '이탈리안 비엠티',
        menu_name_en: 'Italian B.M.T.',
        menu_kcal: 388,
        menu_15cm_price: 5400,
        menu_30cm_price: 9500,
        menu_salad_price: 8100,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Italian_B.M.T_20211231094910899.png',
      },
      {
        menu_id: 16,
        menu_name_kr: '풀드 포크 바비큐',
        menu_name_en: 'Pulled Pork Barbecue',
        menu_kcal: 327,
        menu_15cm_price: 6000,
        menu_30cm_price: 10500,
        menu_salad_price: 7700,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Pulled-Pork+cheese_20211231095012512.png',
      },
      {
        menu_id: 17,
        menu_name_kr: 'K-바비큐',
        menu_name_en: 'K-BBQ',
        menu_kcal: 372,
        menu_15cm_price: 6000,
        menu_30cm_price: 10300,
        menu_salad_price: 7700,
        menu_img:
          'https://m.subway.co.kr/upload/menu/K-BBQ_20211231094930225.png',
      },
      {
        menu_id: 18,
        menu_name_kr: '에그마요 페퍼로니',
        menu_name_en: 'Egg Mayo Pepperoni',
        menu_kcal: 470,
        menu_15cm_price: 6000,
        menu_30cm_price: 10300,
        menu_salad_price: 7700,
        menu_img:
          'https://m.subway.co.kr/upload/menu/%EC%97%90%EA%B7%B8%EB%A7%88%EC%9A%94-%ED%8E%98%ED%8D%BC%EB%A1%9C%EB%8B%88-%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%9815cm-%EB%8B%A8%ED%92%88_20230103125859034.png',
      },
      {
        menu_id: 19,
        menu_name_kr: '에그마요 베이컨',
        menu_name_en: 'Egg Mayo Bacon',
        menu_kcal: 461,
        menu_15cm_price: 6000,
        menu_30cm_price: 10300,
        menu_salad_price: 7700,
        menu_img:
          'https://m.subway.co.kr/upload/menu/%EC%97%90%EA%B7%B8%EB%A7%88%EC%9A%94-%EB%B2%A0%EC%9D%B4%EC%BB%A8-%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%9815cm-%EB%8B%A8%ED%92%88_20230103125847739.png',
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
