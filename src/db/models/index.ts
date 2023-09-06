import { Sequelize } from 'sequelize';
import * as config from '../config/database';
const Users = require('./Users')
const Accounts = require('./Accounts')

const connection = new Sequelize(config);

Accounts.init(connection);
Users.init(connection);
Accounts.associate(connection.models);

module.exports = connection;