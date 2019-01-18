import dotenv from 'dotenv';

dotenv.config();

const config = {
  development: {
    username: 'postgres',
    database: process.env.DATABASENAME,
    password: process.env.DBPASSWORD,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres'
  }
};

module.exports = config[process.env.NODE_ENV || 'development'];
