module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('menu', [
      {
        menu_id: 1,
        menu_category: '15cm',
        menu_name_kr: '베지',
        menu_name_en: 'Veggie Delite',
        menu_kcal: 209,
        menu_price: 3900,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Veggie-Delite_20211231095658375.png',
      },
      {
        menu_id: 2,
        menu_category: '30cm',
        menu_name_kr: '베지',
        menu_name_en: 'Veggie Delite',
        menu_kcal: 418,
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
          'https://www.subway.co.kr/upload/menu/%EB%B2%A0%EC%A7%80_20220413025133772.png',
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
        menu_kcal: 832,
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
          'https://www.subway.co.kr/upload/menu/%EC%97%90%EA%B7%B8%EB%A7%88%EC%9A%94_20220413025402885.png',
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
        menu_kcal: 632,
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
          'https://www.subway.co.kr/upload/menu/%EC%B0%B8%EC%B9%98_20220413025420234.png',
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
        menu_kcal: 524,
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
          'https://www.subway.co.kr/upload/menu/%ED%96%84_20220413025435077.png',
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
        menu_kcal: 530,
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
          'https://www.subway.co.kr/upload/menu/%EC%B9%98%ED%82%A8%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8A%A4%EC%83%90%EB%9F%AC%EB%93%9C_20220804013626403.png',
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
        menu_kcal: 600,
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
          'https://www.subway.co.kr/upload/menu/BLT_20220413025509426.png',
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
        menu_kcal: 928,
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
          'https://www.subway.co.kr/upload/menu/%EC%8A%A4%ED%8C%8C%EC%9D%B4%EC%8B%9C%EC%9D%B4%ED%83%88%EB%A6%AC%EC%95%88_20220413025046219.png',
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
        menu_kcal: 628,
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
          'https://www.subway.co.kr/upload/menu/%EC%B9%98%ED%82%A8%EB%8D%B0%EB%A6%AC%EC%95%BC%ED%82%A4_20220413025028317.png',
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
        menu_kcal: 458,
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
          'https://www.subway.co.kr/upload/menu/%EC%89%AC%EB%A6%BC%ED%94%84_20220413025617416.png',
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
        menu_kcal: 600,
        menu_price: 10700,
        menu_img:
          'https://m.subway.co.kr/upload/menu/Roasted-Chicken_20211231095032718.png',
      },
      {
        menu_id: 30,
        menu_category: '샐러드',
        menu_name_kr: '로스트 치킨',
        menu_name_en: 'Roasted Chicken',
        menu_kcal: 138,
        menu_price: 7800,
        menu_img:
          'https://www.subway.co.kr/upload/menu/%EB%A1%9C%EC%8A%A4%ED%8A%B8%EC%B9%98%ED%82%A8_20220413025308231.png',
      },
      {
        menu_id: 31,
        menu_category: '15cm',
        menu_name_kr: '로티세리 바비큐 치킨',
        menu_name_en: 'Rotisserie Barbecue Chicken',
        menu_kcal: 327,
        menu_price: 6100,
        menu_img:
          'https://www.subway.co.kr/upload/menu/Rotisserie-Barbecue-Chicken_20211231023137878.png',
      },
      {
        menu_id: 31,
        menu_category: '30cm',
        menu_name_kr: '로티세리 바비큐 치킨',
        menu_name_en: 'Rotisserie Barbecue Chicken',
        menu_kcal: 654,
        menu_price: 10700,
        menu_img:
          'https://www.subway.co.kr/upload/menu/Rotisserie-Barbecue-Chicken_20211231023137878.png',
      },
      {
        menu_id: 33,
        menu_category: '샐러드',
        menu_name_kr: '로티세리 바비큐 치킨',
        menu_name_en: 'Rotisserie Barbecue Chicken',
        menu_kcal: 165,
        menu_price: 7800,
        menu_img:
          'https://www.subway.co.kr/upload/menu/%EB%A1%9C%ED%8B%B0%EC%84%B8%EB%A6%AC_20220413025601652.png',
      },
      {
        menu_id: 34,
        menu_category: '15cm',
        menu_name_kr: '치킨 베이컨 아보카도',
        menu_name_en: 'Chicken Bacon Avocado',
        menu_kcal: 355,
        menu_price: 6500,
        menu_img:
          'https://www.subway.co.kr/upload/menu/%EC%B9%98%ED%82%A8%EB%B2%A0%EC%9D%B4%EC%BB%A8%EC%95%84%EB%B3%B4%EC%B9%B4%EB%8F%84%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98_20220804012954461.png',
      },
      {
        menu_id: 35,
        menu_category: '30cm',
        menu_name_kr: '치킨 베이컨 아보카도',
        menu_name_en: 'Chicken Bacon Avocado',
        menu_kcal: 710,
        menu_price: 11300,
        menu_img:
          'https://www.subway.co.kr/upload/menu/%EC%B9%98%ED%82%A8%EB%B2%A0%EC%9D%B4%EC%BB%A8%EC%95%84%EB%B3%B4%EC%B9%B4%EB%8F%84%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%98_20220804012954461.png',
      },
      {
        menu_id: 36,
        menu_category: '샐러드',
        menu_name_kr: '치킨 베이컨 아보카도',
        menu_name_en: 'Chicken Bacon Avocado',
        menu_kcal: 200,
        menu_price: 8200,
        menu_img:
          'https://www.subway.co.kr/upload/menu/%EC%B9%98%ED%82%A8%EB%B2%A0%EC%9D%B4%EC%BB%A8%EC%95%84%EB%B3%B4%EC%B9%B4%EB%8F%84%EC%83%90%EB%9F%AC%EB%93%9C_20220804013826306.png',
      },
      {
        menu_id: 37,
        menu_category: '15cm',
        menu_name_kr: '스테이크 & 치즈',
        menu_name_en: 'Steak & Cheese',
        menu_kcal: 355,
        menu_price: 6500,
        menu_img:
          'https://www.subway.co.kr/upload/menu/Steak-&-Cheese_20211231095455613.png',
      },
      {
        menu_id: 38,
        menu_category: '30cm',
        menu_name_kr: '스테이크 & 치즈',
        menu_name_en: 'Steak & Cheese',
        menu_kcal: 710,
        menu_price: 11300,
        menu_img:
          'https://www.subway.co.kr/upload/menu/Steak-&-Cheese_20211231095455613.png',
      },
      {
        menu_id: 39,
        menu_category: '샐러드',
        menu_name_kr: '스테이크 & 치즈',
        menu_name_en: 'Steak & Cheese',
        menu_kcal: 193,
        menu_price: 8200,
        menu_img:
          'https://www.subway.co.kr/upload/menu/%EC%8A%A4%ED%85%8C%EC%9D%B4%ED%81%AC%EC%B9%98%EC%A6%88_20220413025117730.png',
      },
      {
        menu_id: 40,
        menu_category: '15cm',
        menu_name_kr: '써브웨이 클럽',
        menu_name_en: 'Subway Club',
        menu_kcal: 299,
        menu_price: 5900,
        menu_img:
          'https://www.subway.co.kr/upload/menu/Subway-Club%E2%84%A2_20211231095518589.png',
      },
      {
        menu_id: 41,
        menu_category: '30cm',
        menu_name_kr: '써브웨이 클럽',
        menu_name_en: 'Subway Club',
        menu_kcal: 598,
        menu_price: 10300,
        menu_img:
          'https://www.subway.co.kr/upload/menu/Subway-Club%E2%84%A2_20211231095518589.png',
      },
      {
        menu_id: 42,
        menu_category: '샐러드',
        menu_name_kr: '써브웨이 클럽',
        menu_name_en: 'Subway Club',
        menu_kcal: 144,
        menu_price: 7600,
        menu_img:
          'https://www.subway.co.kr/upload/menu/%EC%8D%A8%EB%B8%8C%EC%9B%A8%EC%9D%B4%ED%81%B4%EB%9F%BD_20220413025207625.png',
      },
      {
        menu_id: 43,
        menu_category: '15cm',
        menu_name_kr: '이탈리안 비엠티',
        menu_name_en: 'Italian B.M.T',
        menu_kcal: 388,
        menu_price: 5400,
        menu_img:
          'https://www.subway.co.kr/upload/menu/Italian_B.M.T_20211231094910899.png',
      },
      {
        menu_id: 44,
        menu_category: '30cm',
        menu_name_kr: '이탈리안 비엠티',
        menu_name_en: 'Italian B.M.T',
        menu_kcal: 776,
        menu_price: 9500,
        menu_img:
          'https://www.subway.co.kr/upload/menu/Italian_B.M.T_20211231094910899.png',
      },
      {
        menu_id: 45,
        menu_category: '샐러드',
        menu_name_kr: '이탈리안 비엠티',
        menu_name_en: 'Italian B.M.T',
        menu_kcal: 226,
        menu_price: 7100,
        menu_img:
          'https://www.subway.co.kr/upload/menu/%EC%9D%B4%ED%83%88%EB%A6%AC%EC%95%88%EB%B9%84%EC%97%A0%ED%8B%B0_20220413025527215.png',
      },
      {
        menu_id: 46,
        menu_category: '15cm',
        menu_name_kr: '풀드 포크 바비큐',
        menu_name_en: 'Pulled Pork Barbecue',
        menu_kcal: 327,
        menu_price: 6000,
        menu_img:
          'https://www.subway.co.kr/upload/menu/Pulled-Pork+cheese_20211231095012512.png',
      },
      {
        menu_id: 47,
        menu_category: '30cm',
        menu_name_kr: '풀드 포크 바비큐',
        menu_name_en: 'Pulled Pork Barbecue',
        menu_kcal: 654,
        menu_price: 10500,
        menu_img:
          'https://www.subway.co.kr/upload/menu/Pulled-Pork+cheese_20211231095012512.png',
      },
      {
        menu_id: 48,
        menu_category: '샐러드',
        menu_name_kr: '풀드 포크 바비큐',
        menu_name_en: 'Pulled Pork Barbecue',
        menu_kcal: 165,
        menu_price: 7700,
        menu_img:
          'https://www.subway.co.kr/upload/menu/%ED%92%80%ED%8F%AC%ED%81%AC_20220413025545422.png',
      },
      {
        menu_id: 49,
        menu_category: '15cm',
        menu_name_kr: 'K-바비큐',
        menu_name_en: 'K-BBQ',
        menu_kcal: 372,
        menu_price: 6100,
        menu_img:
          'https://www.subway.co.kr/upload/menu/K-BBQ_20211231094930225.png',
      },
      {
        menu_id: 50,
        menu_category: '30cm',
        menu_name_kr: 'K-바비큐',
        menu_name_en: 'K-BBQ',
        menu_kcal: 744,
        menu_price: 10700,
        menu_img:
          'https://www.subway.co.kr/upload/menu/K-BBQ_20211231094930225.png',
      },
      {
        menu_id: 51,
        menu_category: '샐러드',
        menu_name_kr: 'K-바비큐',
        menu_name_en: 'K-BBQ',
        menu_kcal: 210,
        menu_price: 7800,
        menu_img:
          'https://www.subway.co.kr/upload/menu/K-%EB%B0%94%EB%B9%84%ED%81%90-%EC%83%90%EB%9F%AC%EB%93%9C-%EB%8B%A8%ED%92%88_20220413025007802.png',
      },

      {
        menu_id: 52,
        menu_category: '15cm',
        menu_name_kr: '에그마요 페퍼로니',
        menu_name_en: 'Egg Mayo Pepperoni',
        menu_kcal: 470,
        menu_price: 6000,
        menu_img:
          'https://www.subway.co.kr/upload/menu/%EC%97%90%EA%B7%B8%EB%A7%88%EC%9A%94-%ED%8E%98%ED%8D%BC%EB%A1%9C%EB%8B%88-%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%9815cm-%EB%8B%A8%ED%92%88_20230103125859034.png',
      },
      {
        menu_id: 53,
        menu_category: '30cm',
        menu_name_kr: '에그마요 페퍼로니',
        menu_name_en: 'Egg Mayo Pepperoni',
        menu_kcal: 940,
        menu_price: 10500,
        menu_img:
          'https://www.subway.co.kr/upload/menu/%EC%97%90%EA%B7%B8%EB%A7%88%EC%9A%94-%ED%8E%98%ED%8D%BC%EB%A1%9C%EB%8B%88-%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%9815cm-%EB%8B%A8%ED%92%88_20230103125859034.png',
      },
      {
        menu_id: 54,
        menu_category: '샐러드',
        menu_name_kr: '에그마요 페퍼로니',
        menu_name_en: 'Egg Mayo Pepperoni',
        menu_kcal: 308,
        menu_price: 7700,
        menu_img:
          'https://www.subway.co.kr/upload/menu/%EC%97%90%EA%B7%B8%EB%A7%88%EC%9A%94-%ED%8E%98%ED%8D%BC%EB%A1%9C%EB%8B%88-%EC%83%90%EB%9F%AC%EB%93%9C-%EB%8B%A8%ED%92%88_20230103125925049.png',
      },

      {
        menu_id: 55,
        menu_category: '15cm',
        menu_name_kr: '에그마요 베이컨',
        menu_name_en: 'Egg Mayo Bacon',
        menu_kcal: 461,
        menu_price: 6100,
        menu_img:
          'https://www.subway.co.kr/upload/menu/%EC%97%90%EA%B7%B8%EB%A7%88%EC%9A%94-%EB%B2%A0%EC%9D%B4%EC%BB%A8-%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%9815cm-%EB%8B%A8%ED%92%88_20230103125847739.png',
      },
      {
        menu_id: 56,
        menu_category: '30cm',
        menu_name_kr: '에그마요 베이컨',
        menu_name_en: 'Egg Mayo Bacon',
        menu_kcal: 922,
        menu_price: 10700,
        menu_img:
          'https://www.subway.co.kr/upload/menu/%EC%97%90%EA%B7%B8%EB%A7%88%EC%9A%94-%EB%B2%A0%EC%9D%B4%EC%BB%A8-%EC%83%8C%EB%93%9C%EC%9C%84%EC%B9%9815cm-%EB%8B%A8%ED%92%88_20230103125847739.png',
      },
      {
        menu_id: 57,
        menu_category: '샐러드',
        menu_name_kr: '에그마요 베이컨',
        menu_name_en: 'Egg Mayo Bacon',
        menu_kcal: 299,
        menu_price: 7800,
        menu_img:
          'https://www.subway.co.kr/upload/menu/%EC%97%90%EA%B7%B8%EB%A7%88%EC%9A%94-%EB%B2%A0%EC%9D%B4%EC%BB%A8-%EC%83%90%EB%9F%AC%EB%93%9C-%EB%8B%A8%ED%92%88_20230103125912308.png',
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
