const knex = require('knex');

const configuration = require('../../knexfile');

const connecition = knex(configuration.development);

module.exports = connecition;