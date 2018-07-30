const express = require("express");
const router = express.Router();

router.get('/fresh', function(req,res){
    res.render('index')
})


module.exports = router;