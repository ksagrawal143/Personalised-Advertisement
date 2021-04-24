const path = require('path')
const express = require('express')

const app = express()

// app.set("view engine", "html")
// app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + '/'));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
  });

app.listen(3000, () => {
    console.log('Server is up on port'+3000)
})