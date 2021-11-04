const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "hospital",
});
app.post("/register", (req, res) => {
  const username = req.body.userReg;
  const password = req.body.passwordReg;
  console.log(username);
  console.log(password);
  const ADD_QUERY = `INSERT INTO hospital.userdata VALUES   ('${username}','${password}')`;
  db.query(ADD_QUERY, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    } else res.send("Task has been added");
  });
});
app.post("/addnewpatient", (req, res) => {
  const ADD_PATIENT_QUERY = `INSERT INTO patient VALUES ('${req.body.newID}', '${req.body.newFname}', '${req.body.newLname}', STR_TO_DATE('${req.body.newDOB}','%Y-%m-%d'),'${req.body.newGender}','${req.body.newAddress}')`;
  db.query(ADD_PATIENT_QUERY, (err) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
      return;
    } else res.send("Patient has been added");
  });
});
app.post("/login", (req, res) => {
  const username = req.body.userlog;
  const password = req.body.passwordlog;
  console.log(username);
  console.log(password);
  const SELECT_QUERY = `SELECT * FROM userdata WHERE username = '${username}' AND password = '${password}'`;
  db.query(SELECT_QUERY, (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      res.send(result);
    } else res.send({ message: "Wrong username or password!" });
  });
});
app.listen(4000, () => {
  console.log("Running on port 4000");
});