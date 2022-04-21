const authRouter = require("express").Router();
const {LogIn,Register} = require("../controllers/auth.controller");





authRouter.post("/register", Register);
authRouter.post("/login", LogIn);



module.exports = authRouter;