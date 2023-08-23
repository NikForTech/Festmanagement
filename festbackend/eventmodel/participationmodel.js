const mongoose = require('mongoose');
const participationmodel = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    iuno:{
      type:Number,
      
     
    },
    semester:{
        type:Number,
        
    },
    email:{
        type:String,
        
    },
    phone:{
        type:Number,

    },
    departement:{
        type:String
    }
},{timestamps:true})
module.exports = mongoose.model('participatns',participationmodel)
