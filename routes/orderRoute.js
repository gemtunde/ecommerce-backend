import express from "express";
import {
  allOrder,
  userOrders,
  placeOrder,
  placeOrderRazOrPay,
  placeOrderStripe,
  updateStatus,
} from "../controllers/orderControllers.js";
import adminAuth from "../middlewares/adminAuth.js";
import authUser from "../middlewares/auth.js";

const orderRouter = express.Router();

//Admin Features
orderRouter.post("/list", adminAuth, allOrder);
orderRouter.post("/status", adminAuth, updateStatus);

//Payment Features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStripe);
orderRouter.post("/razorpay", authUser, placeOrderRazOrPay);

//User Features
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
