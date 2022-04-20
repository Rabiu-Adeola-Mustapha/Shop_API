const mongoose = require("mongoose");

// connect to Mongo
const dbConnect = async () => {

  try {

    await mongoose.connect("mongodb://127.0.0.1:27017/shop");

    console.log("DataBase connected");
  } catch (error) {
    // throw error for debugging
    console.log(error);
    process.exit(1);
  }
};

module.exports = {
    dbConnect,
}
