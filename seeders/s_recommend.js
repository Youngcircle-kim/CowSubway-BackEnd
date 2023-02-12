/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recommend', [
      {
        //menu_id:1,2,3
        recommend_id: 1,
        // sauce_id: 11,
      },
      {
        //menu_id:4,5,6,52,53,54,55,56,57
        recommend_id: 2,
        // sauce_id: [1, 5],
      },
      {
        //menu_id:7,8,9
        recommend_id: 3,
        // sauce_id: [5, 6],
      },
      {
        //menu_id:10,11,12
        recommend_id: 4,
        // sauce_id: 4,
      },
      {
        //menu_id:13,14,15,40,41,42
        recommend_id: 5,
        // sauce_id: [1, 3],
      },
      {
        //menu_id:16,17,18
        recommend_id: 6,
        // sauce_id: [1, 5, 7],
      },
      {
        //menu_id:19,20,21
        recommend_id: 7,
        // sauce_id: [1, 6],
      },
      {
        //menu_id:22,23,24
        recommend_id: 8,
        // sauce_id: [5, 14],
      },
      {
        //menu_id:25,26,27
        recommend_id: 9,
        // sauce_id: [1, 5, 6],
      },
      {
        //menu_id:28,29,30
        recommend_id: 10,
        // sauce_id: 3,
      },
      {
        //menu_id:31,32,33
        recommend_id: 11,
        // sauce_id: 5,
      },
      {
        //menu_id:34,35,36
        recommend_id: 12,
        // sauce_id: [1, 9],
      },
      {
        //menu_id:37,38,39
        recommend_id: 13,
        // sauce_id: [7, 14],
      },
      {
        //menu_id:43,44,45
        recommend_id: 14,
        // sauce_id: [1, 3, 6],
      },
      {
        //menu_id:46,47,48
        recommend_id: 15,
        // sauce_id: 14,
      },
      {
        //menu_id:49,50,51
        recommend_id: 16,
        // sauce_id: [10, 13],
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
