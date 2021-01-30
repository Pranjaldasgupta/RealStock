const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
var router = express.Router();
var corsOptions = {
  origin: '*',
  optionsSuccessStatus:200
};
app.use(cors(corsOptions));
app.use((req,res,next)=>{
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methods','DELETE,PUT,POST,GET');
  next();
});
// parse requests of content-type - 
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use('/', router);
// app.configure(function(){
//   app.use(express.bodyParser());
//   app.use(app.router);
// });
//app.use(app.router);
// simple route
app.post("/api/", (req, res) => {
    //console.log("hitted");
  var data = req.body;
  console.log(data);
  var Name=data['Name'];
  const alpha = require('alphavantage')({ key: 'SIO8HIZ6YTMKK41N' });
  alpha.data.intraday(Name).then(data => {
    //console.log(data);
    res.json({ message: data });
  });
  

});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});