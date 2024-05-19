'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     * 
     * 
    */

    await queryInterface.bulkInsert('tickets', [
      {
        id: 1,
        ticketNo: 1,
        title: 'title1',
        description: 'description1',
        status: 'status1',
        date: new Date('2022-01-01'),
        time: '10:00:00',
        done: false,
      },
      {
        id: 2,
        ticketNo: 4,
        title: 'title2',
        description: 'description2',
        status: 'status2',
        date: new Date('2022-01-08'),
        time: '21:00:00',
        done: false,
      },
      {
        id: 3,
        ticketNo: 3,
        title: 'title3',
        description: 'description3',
        status: 'status2',
        date: new Date('2022-01-05'),
        time: '13:45:00',
        done: false,
      },
      {
        id: 4,
        ticketNo: 5,
        title: 'title4',
        description: 'description4',
        status: 'status2',
        date: new Date('2022-01-03'),
        time: '09:30:00',
        done: false,
      },
      {
        id: 5,
        ticketNo: 6,
        title: 'title5',
        description: 'description5',
        status: 'status2',
        date: new Date('2022-01-02'),
        time: '15:00:00',
        done: false,
      },
      {
        id: 6,
        ticketNo: 8,
        title: 'title6',
        description: 'description6',
        status: 'status2',
        date: new Date('2022-01-02'),
        time: '15:00:00',
        done: false,
      },
      {
        id: 7,
        ticketNo: 9,
        title: 'title7',
        description: 'description7',
        status: 'status2',
        date: new Date('2022-01-02'),
        time: '15:00:00',
        done: false,
      },
      {
        id: 8,
        ticketNo: 7,
        title: 'title8',
        description: 'description8',
        status: 'status2',
        date: new Date('2022-01-02'),
        time: '15:00:00',
        done: false,
      },
      {
        id: 9,
        ticketNo: 2,
        title: 'title9',
        description: 'description9',
        status: 'status2',
        date: new Date('2022-01-02'),
        time: '15:00:00',
        done: false,
      },
      {
        id: 10,
        ticketNo: 10,
        title: 'title10',
        description: 'description10',
        status: 'status2',
        date: new Date('2022-01-02'),
        time: '15:00:00',
        done: false,
      }], {});

    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
