const express = require("express")
const cors = require("cors");
const hbs = require("hbs")
const path = require("path")
const bodyParser = require('body-parser');
// const path = require('path')
const jwt = require('jsonwebtoken');

const app =  express()
const port = process.env.PORT || 3001
// const Data =   require("./model")
const {Data,User,LoginUser} = require("./model");
const { log } = require("console");
app.use(bodyParser.urlencoded({ extended: false }));
const  fname = path.join(__dirname,"../src/Signin.js")

app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/index.html');
    res.sendFile(fname);

  });
//   console.log(fname);

const partialspath = path.join(__dirname,"../","../","/Signuppagemern/templates/partials")
const viewspath = path.join(__dirname,"../","../","/Signuppagemern/templates/views")
console.log(partialspath);
console.log(viewspath);

app.set("view engine","hbs")
app.set("views",viewspath)
app.use(express.json())
app.use(express.urlencoded({extended:false}))

hbs.registerPartials(partialspath) 

app.use(express.json())
app.use(cors());

require("./dbmongo")
app.get("/",(req,res)=>{
res.send("yahoooooo......  Done ")
})

app.get("/register",(req,res)=>{
    res.render("register")
  })

  app.get("/login",(req,res)=>{
    res.render("login")
  })

app.post('/datas', async (req, res) => {
    try {
       
        const newTodo = new Data({
          data :req.body.data,
          message:req.body.message
        });
        // console.log(datamessage+"data message body");
        // console.log(dataBody,">>>>>>>>>>>>>>>>>")

        // const resultdata = await Data.create(newTodo)

    //   const newData = new Data(req.body);
    //   console.log(resultdata);
    // //   console.log(`newdata ${newData}`);

        const resultdata= await newTodo.save();
    res.status(201).send(resultdata)
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.get('/datas', async (req, res) => {
    try {
        const data = await Data.find(); // Assuming Data is your Mongoose model
        res.json(data);
        // console.log(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



app.delete('/datas/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Data.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: 'Data not found' });
        }
        res.json({ message: 'Data deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


app.put('/datas/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body; // Updated data
        const updatedData = await Data.findByIdAndUpdate(id, data, { new: true });
        res.json(updatedData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


//   app.get('/datas/:id', async (req, res) => {
//     try {
//       const id = req.params.id;
//       const data = await Data.findById(id);
//       if (!data) {
//         return res.status(404).json({ message: 'Data not found' });
//       }
//       res.json(data);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Internal server error' });
//     }
//   });



// signin



app.post('/users', async (req, res) => {
      try {
       const password = req.body.password
       const cpassword = req.body.cpassword

       if(password===cpassword){
      const newTodo = new User({
          name :req.body.name,
          email:req.body.email,
          password:req.body.password
        });
        // console.log(datamessage+"data message body");
        // console.log(dataBody,">>>>>>>>>>>>>>>>>")

        // const resultdata = await User.create(newTodo)

    //   const newData = new Data(req.body);
    //   console.log(resultdata);
    // //   console.log(`newdata ${newData}`);

        const resultdata= await newTodo.save()
        // console.log(resultdata);;
    res.status(201).send(resultdata)
       }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });



  // app.post('/users', async (req, res) => {
  //   const { email, password } = req.body;
  
  //   try {
  //     // Find the user by email
  //     const user = await LoginUser.findOne({ email });
  //      console.log(user);
  //     // Check if user exists


  //     if (!user) {
  //       return res.status(404).json({ message: 'User not found' });
  //     }

  
  //     // Compare the provided password with the stored password


  //   //   const passwordMatch = await user.comparePassword(password);
  
  //   //   if (!passwordMatch) {
  //   //     return res.status(401).json({ message: 'Invalid email or password' });
  //   //   }
  
  //     // If the password matches, return the user data
  //     res.status(200).json(user);
  //     console.log(user);
  //   } catch (error) {
  //     console.error('Login error:', error);
  //     res.status(500).json({ message: 'Internal server error' });
  //   }
  // });




app.post('/users/login', async (req, res) => {
    try {
      const email = req.body.emails;
      console.log(email+    "emqilsss");
      const password = req.body.passwords
            console.log(password + " passsword of   user");

      const user1 = await User.findOne({ email:email });
         console.log(user1 +"User1qqqqqqqqqqqqqq");
      if (!user1) {
        return res.status(404).json({ message: 'User not found' });
          }
      console.log(user1 + "user1data");
      const token = jwt.sign({ userId: user1._id, email: user1.email }, 'Mukulgupta1712@gmail.com', { expiresIn: '1h' });
       console.log(token +   "  token   ");
      //  res.json(token)
      //  res.json(user1 );
      res.json({ token, user: user1 });


    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }


  });


  

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
})























// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json());
// app.use(cors());

// // Define Mongoose schema
// const dataSchema = new mongoose.Schema({
//     data: {
//         type: String,
//         // other options if needed
//     }
// });

// // Define Mongoose model
// const Data = mongoose.model("Data", dataSchema);

// // MongoDB connection
// mongoose.connect("mongodb://127.0.0.1:27017/Todo_dir", {
//     // useNewUrlParser: true,
//     // useUnifiedTopology: true
// }).then(() => {
//     console.log("MongoDB connected");
// }).catch(err => {
//     console.error("MongoDB connection error:", err);
// });

// // POST route to handle data submission
// app.post('/datas', async (req, res) => {
//     try {
//         const dataBody = req.body;
//         console.log(dataBody);
//         const resultdata = await Data.create(dataBody);
//         res.status(201).send(resultdata);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is listening at port ${port}`);
// });
