"use strict";

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
      "tickets",
      [
        {
          ticketNo: 1,
          title: "title1",
          description: "description1",
          status: "status1",
          date: "2022-01-01",
          time: "10:00:00",
          done: false,
          actions: [1],
        },
        {
          ticketNo: 4,
          title: "title2",
          description: "description2",
          status: "status2",
          date: "2022-01-02",
          time: "21:00:00",
          done: false,
          actions: [2, 3],
        },
        {
          ticketNo: 3,
          title: "title3",
          description: "description3",
          status: "status2",
          date: "2022-01-03",
          time: "13:45:00",
          done: false,
          actions: [1, 2, 3],
        },
        {
          ticketNo: 5,
          title: "title4",
          description: "description4",
          status: "status2",
          date: "2022-01-08",
          time: "09:30:00",
          done: false,
          actions: [1, 3],
        },
        {
          ticketNo: 6,
          title: "title5",
          description: "description5",
          status: "status2",
          date: "2022-01-11",
          time: "15:00:00",
          done: false,
          actions: [2, 3],
        },
        {
          ticketNo: 8,
          title: "title6",
          description: "description6",
          status: "status2",
          date: "2022-01-14",
          time: "15:00:00",
          done: false,
          actions: [1, 2, 3],
        },
        {
          ticketNo: 9,
          title: "title7",
          description: "description7",
          status: "status2",
          date: "2022-01-05",
          time: "15:00:00",
          done: false,
          actions: [1, 2, 3],
        },
        {
          ticketNo: 7,
          title: "title8",
          description: "description8",
          status: "status2",
          date: "2022-01-03",
          time: "15:00:00",
          done: false,
          actions: [2, 3],
        },
        {
          ticketNo: 2,
          title: "title9",
          description: "description9",
          status: "status2",
          date: "2022-01-02",
          time: "15:00:00",
          done: false,
          actions: [1, 3],
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
