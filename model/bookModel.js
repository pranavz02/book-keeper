import mongoose from "mongoose"

const bookSchema = mongoose.Schema(
  {
    id: {
        type: Number,
    },
    name: {
      type: String,
      required: [true, "Please add the name of book"],
    },
    Author: {
      type: String,
    },
    startDate: {
      type: Date,
      required: [true, "Please add the start date"],
    },
    endDate: {
        type: Date,
    },
    summary: {
        type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Books", bookSchema);