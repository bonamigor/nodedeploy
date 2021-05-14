const mysqlServer = require('mysql');

const connection = mysqlServer.createConnection(process.env.JAWSDB_URL);

const errorHandler = (error, msg, rejectFunction) => {
  console.error(error);
  rejectFunction({ error: msg })
}

const categoriasModule = require('./categorias')({ connection, errorHandler });
const usersModule = require('./users')({ connection, errorHandler });
const authModule = require('./auth')({ connection, errorHandler });

module.exports = {
  categorias: () => categoriasModule,
  users: () => usersModule,
  auth: () => authModule
}
