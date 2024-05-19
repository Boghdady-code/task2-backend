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
    */
    await queryInterface.bulkInsert('dataTables', [
      {
        name: 'Ticket No',
        sortable: true,
        sortBy: 'ticketNo',
      },
      {
        name: 'Title',
        sortable: false,
        sortBy: 'title',
      },
      {
        name: 'Description',
        sortable: false,
        sortBy: 'description',
      },
      {
        name: 'Status',
        sortable: true,
        sortBy: 'status',
      },
      {
        name: 'Date',
        sortable: true,
        sortBy: 'date',
      },
      {
        name: 'Time',
        sortable: true,
        sortBy: 'time',
      },
    ])
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
