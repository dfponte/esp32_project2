
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());



const api = require('./rotas/');
app.use('/api',api);
PORT = 3080;


/*app.get('/',(req,res)=>{

   res.json({success:true});


}); */


if(process.env.NODE_ENV==='development'){

   app.use(express.static('frontend/build'));
   const path = require('path');

   app.get('*',(req,res)=>{

      res.sendFile(path.resolve(__dirname,'frontend','build','index.html'));
   });

}

app.listen(process.env.PORT,()=>{
  
   console.log('Servidor On');
   console.log(process.env.NODE_ENV);

});

