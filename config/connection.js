var mysql = require("mysql");
connection = mysql.createConnection({
    host: "localhost",
    user: "Brianna",
    password: "root",
    database: "burgers_db"
});
connection.connect(funtion(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
module.exports = connection;