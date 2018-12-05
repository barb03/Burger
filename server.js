var express = require("express");
var app = express();
var path = require("path");
var mysql = require("mysql");
var exphbs = require("express-handlebars");

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//added for images
app.use(express.static(path.join("app","public")));

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burger_db"
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers;", function(err, data) {
      if (err) {
        return res.status(500).end();
      }
  
      res.render("index", { burgers: data });
    });
  });
  
//   // Create a new todo
//   app.post("/todos", function(req, res) {
//     connection.query("INSERT INTO plans (plan) VALUES (?)", [req.body.plan], function(err, result) {
//       if (err) {
//         return res.status(500).end();
//       }
  
//       // Send back the ID of the new todo
//       res.json({ id: result.insertId });
//       console.log({ id: result.insertId });
//     });
//   });
  

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});

