'use strict';
const sampleData = require('../faker/generate-data')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', sampleData.userData)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', {}, null)
  }
};
