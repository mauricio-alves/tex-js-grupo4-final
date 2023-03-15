const Sequelize = require('sequelize');
const { conn } = require('../database/conn');

const User = conn.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(16),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false
  },
  lastLogin: {
    type: Sequelize.DATETIME
  },
  permissionId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

// Accommodation.belongsTo(Tag, {
//     constraint: true,
//     foreignKey: 'tagId'
// });

module.exports = User;
