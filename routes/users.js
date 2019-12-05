var express = require('express');
var router = express.Router();
var users = require("../models/users");

/* GET userlist. */
router.get('/userlist', function(req, res) {
  users.find({},{},function(e,response){
    res.json(response);
  });
});

/* POST to adduser. */
router.post('/adduser', function(req, res) {
  var newUser = new users(req.body);
    newUser.save((err, result)=>{
      res.send(
            (err === null) ? { msg: '' } : { msg: err }
      );
    });
});

/* DELETE to deleteuser. */
router.delete('/deleteuser/:id', function(req, res) {
  var userToDelete = req.params.id;
  users.deleteOne({ '_id' : userToDelete }, function(err) {
    res.send((err === null) ? { msg: '' } : { msg:'error: ' + err });
  });
});

module.exports = router;