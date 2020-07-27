module.exports = {
  
    development: {
      client: 'mysql',
      connection: {
        database: 'casa',
        user:     'root',
        password: ''
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    },

    staging: {
        client: 'sqlite3',
        connection: {
            filename: './dev.sqlite3'
        },
        debug: true
    },
  
    production: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations: {
        tableName: 'knex_migrations'
      }
    }
  
  };