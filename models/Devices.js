const mongoose = require('mongoose');
const slug = require('slug');
const slugify = require('slugify');
const { Schema } = mongoose

const devicesSchema = new Schema({
   nome:{ type:String, required: true, unique: true},
    slug:{ type: String, required: true, unique: true,default:function(){return slugify(this.nome)} },
    kwh:{ type:Number, required: true},
    corrente:{ type:Number, required: true},
    voltagem: { type: Number, required: true},
    fp: { type:Number, required: true}


})

module.exports = mongoose.model('devices', devicesSchema);