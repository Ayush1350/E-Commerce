import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("Category", categorySchema);