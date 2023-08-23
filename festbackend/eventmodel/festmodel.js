const mongoose = require('mongoose');


const festSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
   
    },
    Organizedby:{
      type:String,
      required:true
    },
    image:{
      type:String,
      //required:true
    },
    description:{
      type:String,
     // required:true
    }

    
},{timestamps:true});
//console.log("everything");
const festmodel = mongoose.model('currentfest',festSchema)
module.exports=festmodel;
