const path = require('path')
const express = require('express')
const neatCSV=require('neat-csv')
const fs=require('fs')
const bodyParser = require('body-parser'); 
const app = express()

app.set("view engine", "html")

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 
  
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
  });
   
  app.post("/", (req, res) => { 
      var foo = req.body.foo; 
      var ka = req.body.ka; 
      console.log(foo); 
      console.log(ka); 
      res.send("kappa"); 
  }); 
   
// fs.readFile('./features_detected.csv',async(err,data)=>{
//   if(err){
//     console.error(err)
//     return
//   }
//   console.log(await neatCSV(data))
// })
app.listen(3000, () => {
    console.log('Server is up on port'+3000)
})
