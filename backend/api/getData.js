const mysql = require("mysql2");
const dotenv = require("dotenv").config();
// 连接数据库;
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  // port: 3306,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// 准备连接数据库
// connection.query("SELECT * FROM `chat_data`", function (err, results, fields) {
//   console.log(results); // results contains rows returned by server
//   console.log(fields); // fields contains extra meta data about results, if available
// });

// 导出 collection 对象
// module.exports = {
//   query: (sql, callback) => {
//     connection.query(sql, callback);
//   },
// };
module.exports = connection;
