    const mongoose = require("mongoose")
const dataSchema = new mongoose.Schema({
    data:{

        type:String
        // required:true
    },
    message:{
        type:String
    },
    // name:{
    //     type:String,
    //     required:true
    // },
    // email:{
    //     type:String,
    //     required:true,
    //     unique:true,
    //     trim:true,
        
    // },
    // password:{
    //     type:String,
    //     required:true
    // }


    // email: String,
    // Add other fields as needed
  });
  const userSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      required: true
    },
    name:{
            type:String,
            required:true
        },

  });
     
    
  const LoginSchema = new mongoose.Schema({

    email:{
      type:String,
      required:true
    },
    password:{
      type:String,
      required:true
    }
  })


  const Data = mongoose.model('Data', dataSchema);
  const User = mongoose.model('User', userSchema);
  const LoginUser = mongoose.model('LoginUser', LoginSchema);




module.exports = {Data,User,LoginUser}