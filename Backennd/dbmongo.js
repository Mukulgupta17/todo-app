const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1:27017/Todo_dir')
.then(()=>console.log("connection successful")) 
.catch((err)=>console.log(err));

