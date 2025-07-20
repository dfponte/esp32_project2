

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECT);
mongoose.connection.on('connected', function () {
 console.log('Conexão estabelecida!!');
});


