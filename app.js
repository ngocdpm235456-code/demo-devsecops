const express = require('express');
const app = express();

const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE-SUPER-SECRET-KEY"; 

app.get('/login', (req, res) => {
  let username = req.query.username;
  
  let sqlQuery = "SELECT * FROM users WHERE username = '" + username + "'";
  
  res.send("Đang xác thực thông tin đăng nhập...");
});

app.listen(3000, () => {
  console.log("Server đang chạy ở cổng 3000");
});
