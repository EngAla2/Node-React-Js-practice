import mysql from 'mysql2';
import Config from './config.js';
 
const con = mysql.createConnection({
  host: Config.HOST,
  user: Config.DB_USER,
  password: Config.PASSWORD,
  database: Config.DB
});

export default con