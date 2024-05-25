import mongoose from "mongoose";

// Define the schema for orders
const orderSchema = new mongoose.Schema(
  {
    // Products in the order, referencing the Product collection
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      }
    ],
    // Payment details for the order
    payment: {
      // You can define the payment schema here, for example:
      method: { type: String, required: true }, // Payment method (e.g., "Credit Card", "PayPal")
      amount: { type: Number, required: true }, // Payment amount
      // Add other payment details as needed
    },
    // Buyer of the order, referencing the User collection
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    // Status of the order
    status: {
      type: String,
      default: "Not Processed",
      enum: ["Not Processed", "Processing", "Shipped", "Delivered", "Cancelled"]
    }
  },
  { timestamps: true } // Add timestamps for createdAt and updatedAt
);

// Export the Order model
export default mongoose.model("Order", orderSchema);
