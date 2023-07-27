const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    id : {
        type : Number,
        required : true
    },

    name :{
        type : String,
        required : true  //aniwarayen value ekk thiyenn ona databsase ekata add wenawanam(validation)

    },
    address :{
        type : String,
        required : true
    },

    gender :{
        type : String,
        required : true
    }

})
                                //yanna ona database eke table eka
const customer = mongoose.model('Customer',customerSchema);

module.exports = customer;