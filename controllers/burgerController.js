var express = require('express');
var router = express.Router();

var burger = require('../models/burgers.js');

router.get('/', (req,res) =>{
  burger.all((data) => {
    res.json(data);
    console.log(data);
  })
})