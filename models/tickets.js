'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tickets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  tickets.init({
    ticketNo: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          args: true,
          msg: "ticket no is required"
        }
      }
    },
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          args: true,
          msg: "title is required"
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          args: true,
          msg: "description is required"
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          args: true,
          msg: "status is required"
        }
      }
    },
    date: {
      type: DataTypes.DATE,
      validate: {
        notEmpty:{
          args: true,
          msg: "date is required"
        }
      }
    },
    time: {
      type: DataTypes.STRING,
      validate: {
        notEmpty:{
          args: true,
          msg: "time is required"
        }
      }
    },
    done: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty:{
          args: false,
        }
      },
      defaultValue: false
    }
  }, {
    sequelize,
    modelName: 'tickets',
  });
  return tickets;
};