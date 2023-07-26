// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const dotenv = require("dotenv");
// const app = express();
// require('dotenv').config();

// const PORT = process.env.PORT || 8000;


// app.use(cors());
// app.use(bodyParser.json());


// // const URL = process.env.MONGODB_URL;

// // mongoose.connect(URL,{
// //     useCreateIndex: true,
// //     useNewUrlParser:true,
// //     useUnifiedTopology:true,
// //     useFindAndModify: false
// // });





// // const connection = mongoose.connection;
// // connection.once("open",() => {
// //     console.log("mongodb Connection success..!");
// // })




// app.listen(PORT,()=>{
//     console.log("Application is Running !!!");
// });

// app.listen(PORT,() => {
//     console.log(`Server is up and running on port number: ${PORT}`)
// })


// mongoose.connect("mongodb://localhost:27017/",{
//     }).then(() => {
//     console.log("DB Connetion Successfull");
// })
//     .catch((err) => {
//         console.log(err.message);
//     });



const express = require('express');
const mongoose = require('mongoose');
const app = express();
var cors = require('cors');

app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))


//App middleware
app.use(bodyParser.json());


const PORT = 8080;
//mongodb://localhost:27017/webStoreTwo

mongoose.connect("mongodb://127.0.0.1:27017/webStoreTwo",{
    }).then(() => {
    console.log("Mongo DB Connetion Successfull");
})
    .catch((err) => {
        console.log("db error"+err.message);
    });

app.listen(PORT,()=>{
    console.log("Application is Running !!!");
});