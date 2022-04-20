const {model, Schema} = require("mongoose");


const productShema = new Schema({
    name: {
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    price: {
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },

},{timestamp: true});



module.exports = model("Product", productShema)