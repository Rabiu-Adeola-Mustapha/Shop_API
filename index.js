const express = require("express");
const { dbConnect } = require("./config/dbConnects");
const productRouter = require("./routes/productRoutes")

const app = express();
app.use(express.json())


app.use("/product", productRouter);




const start = async () => {

   await dbConnect();
   
   app.listen(3000, () => {
       console.log("Server Up")
   });
};

start();

