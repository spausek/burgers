var express = require('express');
var router = express.Router();

var burger = require('../models/burgers.js');

router.get('/', (req, res) => {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post('/burgers', (req, res) => {
  burger.create([
    'burger_name', 'devoured'
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    
    res.redirect('/');
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log('condition', condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.redirect('/');
    }
  });
});



router.delete('/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;

    burger.delete(condition, function() {
        res.redirect('/');
    });
})

module.exports = router;