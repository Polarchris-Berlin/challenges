import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

const reviewSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Review = models.Review || model("Review", reviewSchema);

export default Review;
