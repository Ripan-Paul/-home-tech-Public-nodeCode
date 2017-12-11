var express = require('express');
var router = express.Router();
var Product = require('../EquipModel/EquipModel');

/* GET home page. */
router.get('/users', function(req, res, next) {
   Product.find(function(err, docs) {
     console.log("docs "+docs);
       var productChunks = [];
      var chunkSize = 3;
       for (var i = 0; i < docs.length; i += chunkSize) {
           productChunks.push(docs.slice(i, i + chunkSize));
       }
   res.render('users', { title: 'Cool, huh!', condition: true, anyArray: [1,2,3], products: productChunks });

});
});

module.exports = router;