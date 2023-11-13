import express from "express";
import { getAllUser, signup, login, adminlogin, deleteUser, getUserById } from "../controllers/user-controller";

// Route logger-middleware
var userRouterLogger =(req,res,next)=>{
    console.log('Logged into User Route');
    next();
};

const userrouter = express.Router();

userrouter.use(userRouterLogger);
userrouter.get("/", getAllUser);
userrouter.post("/signup", signup);
userrouter.post("/login", login);
userrouter.delete("/:id",deleteUser);
userrouter.get("/:id",getUserById);

// admin routes
userrouter.post("/admin/login",adminlogin);

export default userrouter;
