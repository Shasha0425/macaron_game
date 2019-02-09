var express = require('express');
var router = express.Router();
var macaroon = require('../models/macaroon.js');

router.get('/', function(req,res){
    macaroon.all(function(macaroon_data){
        console.log(macaroon_data);
        res.render('index',{macaroon_data});

    })
})

router.put('/macaroons/update',function(req,res){
    macaroon.update(req.body.macaroon_id, function(result){
        console.log(result);
        res.redirect('/');
    });
});

router.post('/macaroons/create', function(req,res){
    macaroon.create(req.body.macaroon_flavor, function(result){
        res.redirect('/')
    })
})
module.exports = router;
