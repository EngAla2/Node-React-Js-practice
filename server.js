import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import Config from './config.js';
import con from './connect_db.js';

const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = Config.PORT;

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get("/", (req, res) => {

  var sql = `SELECT * FROM tblUser;`;
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    res.json({users : result});
  });
});

app.post("/create", (req, res) => {
  var sql = `INSERT INTO tblUser (strName, dtmDOB, strEmail, strPassword, blnIsActive) VALUES ('${req.body.name}', '${req.body.dateOfBirth}', '${req.body.email}', '${req.body.password}', true)`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
  res.json({ message: "Thank you for your request. The serverApp received the following information and soon will be able to save this data into the database:", data: req.body});
});

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});