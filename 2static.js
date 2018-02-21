var express = require('express')
var theport = process.argv[2]
var thepage = process.argv[3]
var path = require('path')
var app = express()

app.use(express.static(thepage||path.join(__dirname, 'public')));

app.listen(theport)
