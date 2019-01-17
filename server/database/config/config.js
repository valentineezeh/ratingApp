import dotenv from 'dotenv';

dotenv.config();

const config = {
  development: {
    database: 'DATABASENAME',
    password: 'DBPASSWORD',
    host: '127.0.0.1',
    port: '54320',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];
