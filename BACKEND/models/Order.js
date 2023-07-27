const mongoose =require("mongoose");

const orderSchema = new mongoose.Schema({

    orderId : {
        type : String,
        required : true
    },
    customerId : {
        type : String,
        required : true
    },
    discount : {
        type : Number,
        required : true
    },
    amount : {
        type : Number,
        required : true
    }

})

module.exports = mongoose.model("Order",orderSchema);