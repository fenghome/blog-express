const express = require('express');
const router = express.Router();
const chectLogin = require('../middlewares/check').checkLogin;

//POST /comments 创建一条留言
router.post('/',function(req,res,next){
    res.send('创建留言');
})

//GET /comments/:commentId/remove 删除一条留言
router.get('/:commentId/remove',function(req,res,next){
    res.send('删除留言');
})

module.exports = router;
