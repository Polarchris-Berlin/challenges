import mongoose from "mongoose";
import "./Review";

const { Schema, model, models } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  reviews: {
    type: [Schema.Types.ObjectId],
    ref: "Review",
  },
});

const Product = models.Product || model("Product", productSchema);

export default Product;
