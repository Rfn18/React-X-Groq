const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const babel = require("@babel/core");
const bodyParser = require("body-parser");

const db = require("./component/connectio.js");
const response = require("./component/response.js");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  const sql = "SELECT * from user_data";
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      response(500, null, "Internal Server Error", res);
    } else {
      response(200, result, "success", res);
    }
  });
});

app.post("/user", (req, res) => {
  const { nama, email, password } = req.body;
  const mysql = `INSERT INTO user_data (nama, email, password) VALUES ("${nama}", "${email}", "${password}")`;
  db.query(mysql, (err, result) => {
    if (err) {
      console.error(err);
      response(500, null, "Internal Server Error", res);
    } else {
      response(200, result, "success", res);
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM user_data WHERE email = "${email}" AND password = "${password}"`;
  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      response(500, null, "Internal Server Error", res);
    } else {
      if (result.length > 0) {
        response(200, result, "success", res);
      } else {
        response(401, null, "Unauthorized", res);
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
