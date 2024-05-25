import express from 'express'
import {registercontroller,loginController,updateProfileController, getOrdersController,getAllOrdersController,orderStatusController} from '../controllers/authController.js'

const router= express.Router()

router.post('/register',registercontroller);

router.post("/login", loginController);
router.post("/profile", updateProfileController);

//orders
router.get("/orders", getOrdersController);

//all orders
router.get("/all-orders", getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  orderStatusController
);  

export default router; 