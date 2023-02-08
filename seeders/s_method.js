'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'method',
      [
        {
          method_id: 1, // 카드 결제
          method_name: '카드 결제',
        },
        {
          method_id: 2, // 간편 결제(모바일 페이, 앱결제 등)
          method_name: '간편 결제',
        },
        {
          method_id: 3, // 기프티콘/쿠폰 결제
          method_name: '기프티콘,쿠폰 결제',
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
