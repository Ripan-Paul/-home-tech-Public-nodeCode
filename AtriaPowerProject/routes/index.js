var express = require('express');
var router = express.Router();
var Product = require('../EquipModel/EquipModel');
var users = require('../views/users');

/* GET home page. */
router.get('/', function(req, res, next) {
   Product.find(function(err, docs) {
     console.log("docs "+docs);
       var productChunks = [];
      var chunkSize = 3;
       for (var i = 0; i < docs.length; i += chunkSize) {
           productChunks.push(docs.slice(i, i + chunkSize));
       }
   res.render('index', { title: 'Cool, huh!', condition: true, anyArray: [1,2,3], products: productChunks });

});
});

router.get('/users', function(req, res, next) {
   Product.find(function(err, docs) {
     console.log("docs "+docs);
       var productChunks = [];
      var chunkSize = 3;
       for (var i = 0; i < docs.length; i += chunkSize) {
           productChunks.push(docs.slice(i, i + chunkSize));
       }
   res.render('users', { title: 'Cool, huh!', equip:'AC', condition: true, anyArray: [1,2,3], products: productChunks });

});
});

router.get('/users/:id', function(req, res, next) {
    console.log("Reached");
    console.log("Params ",req.params);
    var id = req.params.id;
    
    Product.findById(id, function(err, docs) {
    if (err) {
      console.error('error, no entry found');
    }
    console.log("dcd " +docs);
      
    
    res.render('equip', { products: docs });
 });

});
router.get('/users/equipName/:equipment', function(req, res, next) {
    console.log("Reached");
    console.log("Params ",req.params);
    var equipment = req.params.equipment;
    
    Product.findOne({equipment : equipment }, function(err, docs) {
    if (err) {
      console.error('error, no entry found');
    }
    console.log("dcd " +docs);
      
    
    res.render('equiphb', { products: docs });
 });

});


module.exports = router;
