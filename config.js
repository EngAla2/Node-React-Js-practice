import dotenv from 'dotenv';

dotenv.config('.env')

const Config = {
  PORT: process.env.PORT,
  DB_USER: process.env.DB_USER,
  HOST: process.env.DB_HOST,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB
}
export default Config;