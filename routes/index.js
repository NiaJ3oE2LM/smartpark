var  express=require('express'),
  assets = require('./public'),
<<<<<<< HEAD
=======
  db = require('../mysql'),
>>>>>>> 81cc113ddb00829736a9595f6c769337103fc3e0
  bodyParser=require('body-parser');

var router= express.Router();
router.use(bodyParser.json());
router.use('/public', assets);

<<<<<<< HEAD
=======

>>>>>>> 81cc113ddb00829736a9595f6c769337103fc3e0
router.route('/').get(function(req, res){
  res.render('./app');
});
router.route('/map').get(function(req, res){
  res.render('./map');
<<<<<<< HEAD
});
router.route('/about').get(function(req, res){
  res.render('./layouts/about');
});
router.route('/contact').get(function(req, res){
  res.render('./layouts/contact');
});
/*
router.route('/user').get(function(req, res){
  res.render('./layouts/user');
});
router.route('/login').get(function(req, res){
  res.render('./layouts/login');
});
router.route('/userMap').get(function(req, res){
  res.render('./layouts/userMap');
})
*/
=======
})
.post(function(req, res){
  //console.log(req.body);
  db.setUser(req.body.userId, req.body.bikeId, req.body.pin, function(err, res){
    if(err)console.log(err);
    //else console.log(res);
  });
  res.end();
});
router.route('/about').get(function(req, res){
  res.render('./about');
});
router.route('/user').get(function(req, res){
  res.render('./user');
});
router.route('/contact').get(function(req, res){
  res.render('./contact');
});

>>>>>>> 81cc113ddb00829736a9595f6c769337103fc3e0
module.exports = router;
