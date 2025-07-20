

const router = require('express').Router();
require('../DB/mongodb');

const devices = require('./devices');
router.use('/devices',devices);

router.get('/',(req,res)=>{

  res.json({
        success:false,
        mensagem:"Acesso reservado"
    });
       
});

module.exports = router;