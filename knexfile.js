module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/shouts.db3',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  }
};

// postgres://yltlkwlxjrwyld:fd0b4d15f99519c8122b670e17348fb5d2f119eccdee6326bc0a8ceb27c05973@ec2-107-20-167-241.compute-1.amazonaws.com:5432/damk7apg0duaf8