var express = require('express')
var app = express()
var port = 3000
var user = require('./Routes/userRoutes')
var multer = require('multer');
var upload = multer();

// for parsing application/json
app.use(express.json())
// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))
// for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.use('/user', user)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})