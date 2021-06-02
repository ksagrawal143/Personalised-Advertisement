const path = require('path')
const express = require('express')
const neatCSV=require('neat-csv')
const fs=require('fs')
const bodyParser = require('body-parser'); 
const app = express()
// const adFetch=require('./features')
app.set("view engine", "html")

app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
  
let currentData={};
app.get("/home", function (req, res) {
    let query="?sunglasses and eyeglasses";
    Object.keys(currentData).map(key=>{
        query+=`${key}=${currentData[key]}&`
    })
    console.log(query)
    res.redirect(`/index.html${query}`);
  });
   
  app.post("/", (req, res) => { 
    currentData={...req.body}  
    console.log(req.body)
      res.send();
  }); 
 
app.listen(3000, () => {
    console.log('Server is up on port'+3000)
})
