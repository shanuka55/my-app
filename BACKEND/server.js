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



const customersRouter = require('./routes/customers.js');
const itemsRouter = require('./routes/items.js');
const orderRouter = require('./routes/orders.js');

app.use("/customer",customersRouter);
app.use("/item",itemsRouter);
app.use("/order",orderRouter);





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