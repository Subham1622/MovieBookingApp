import express from "express";
import {
  addBooking,
  getAllbookings,
  getBookingById,
  deleteBooking,
} from "../controllers/booking-controller.js";

// Route logger-middleware
var bookingRouterLogger =(req,res,next)=>{
  console.log('Logged into Booking Route');
  next();
};

const bookingrouter = express.Router();

bookingrouter.use(bookingRouterLogger);
bookingrouter.get("/", getAllbookings);
bookingrouter.get("/:id", getBookingById);
bookingrouter.post("/addBooking", addBooking);
bookingrouter.delete("/delete/:id", deleteBooking);

export default bookingrouter;
