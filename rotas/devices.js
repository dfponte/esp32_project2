
const router = require('express').Router();
const { trusted } = require('mongoose');
const Device = require('../models/Devices');

router.get('/', async (req,res)=>{    // localhost:3080/api/devices

    try {
        
      const listDevices = await Device.find();
      res.json({
       success:true,
       message:listDevices
       });

    } catch (error) {
        
        res.json({
       success:false,
       message:"Devices não encontrados"
       });
    }

  const listDevices = await Device.find();
  res.json({
    success:true,
    message:listDevices
  });


});


router.post('/', async (req,res)=>{

    const novoDevice = new Device({

        nome:req.body.nome,
        kwh:req.body.kwh,
        corrente:req.body.corrente,
        voltagem:req.body.voltagem,
        fp:req.body.fp

    });


try{
        const saveNovoDevice = await novoDevice.save()
        res.json({
            success: true,
            message: saveNovoDevice
        })
    }
    catch{
        res.json({
            success: false,
            message: "Não foi possível cadastrar o novo device."
        })
    }

});


router.put("/:id", async(req, res)=>{
    try{
        var upDevice = await Device.updateOne(
            {_id: req.params.id},
            {kwh: req.body.kwh,
            corrente: req.body.corrente,
            voltagem: req.body.voltagem,
            fp: req.body.fp}
        )
        res.json({
            success: true,
            updated: upDevice.nmodified
        })
    }
    catch(err){
        res.json({
            success: false,
            message: "Não foi possível a atualização do device"
        })
    }
});

router.delete("/:id", async(req, res)=>{
    try{
        var deleteMedidasId = await Device.deleteOne({
            _id: req.params.id
        })
        res.json({
            success: true,
            data: deleteMedidasId
        })
    }
    catch(err){
        res.json({
            success: false,
            data: err
        })
    }
});



module.exports = router;