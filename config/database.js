const { dbDriver, dbHost, dbPort, dbName, dbUser, dbPass } = require('../env')

const database = {
  development: {
    // Mysql config
    mysql: {
      database: `${dbName}_dev`,
      username: dbUser || 'root',
      password: dbPass || '',
      host: dbHost || '127.0.0.1',
      port: dbPort || 3306,
      dialect: 'mysql'
    }, // Postgres config
    pgsql: {
      database: `${dbName}_dev`,
      username: dbUser || 'postgres',
      password: dbPass || '',
      host: dbHost || '127.0.0.1',
      port: dbPort || 5432,
      dialect: 'postgres'
    }, // Sqlite3
    sqlite: {
      dialect: 'sqlite',
      storage: `${__dirname}/../database/database.dev.sqlite`
    }
  },
  test: {
    // Mysql config
    mysql: {
      database: `${dbName}_test`,
      username: dbUser || 'root',
      password: dbPass || '',
      host: dbHost || '127.0.0.1',
      port: dbPort || 3306,
      dialect: 'mysql'
    }, // Postgres config
    pgsql: {
      database: `${dbName}_test`,
      username: dbUser || 'postgres',
      password: dbPass || '',
      host: dbHost || '127.0.0.1',
      port: dbPort || 5432,
      dialect: 'postgres'
    }, // Sqlite3
    sqlite: {
      dialect: 'sqlite',
      storage: `${__dirname}/../database/database.test.sqlite`
    }
  },
  production: {
    // Mysql config
    mysql: {
      database: `${dbName}`,
      username: dbUser || 'root',
      password: dbPass || '',
      host: dbHost || '127.0.0.1',
      port: dbPort || 3306,
      dialect: 'mysql'
    }, // Postgres config
    pgsql: {
      database: `${dbName}`,
      username: dbUser || 'postgres',
      password: dbPass || '',
      host: dbHost || '127.0.0.1',
      port: dbPort || 5432,
      dialect: 'postgres'
    }, // Sqlite3
    sqlite: {
      dialect: 'sqlite',
      storage: `${__dirname}/../database/database.sqlite`
    }
  }
}

module.exports = {
  development: database.development[dbDriver],
  test: database.test[dbDriver],
  production: database.production[dbDriver]
}
