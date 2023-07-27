const mongoose = require('mongoose');
const { schema } = require('./customer');

const Schema = mongoose.Schema;

const itemSchema = new schema({


    itemCode : {
        type :String,
        required : true
    },

    itemName : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    qtyOnHand : {
        type : Number,
        required : true
    }


})

module.exports = mongoose.model('item',itemSchema)