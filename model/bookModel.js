import mongoose from "mongoose"

const bookSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Add the name of book"],
    },
    Author: {
      type: String,
      required: [true, "Add the name of author"]
    },
    startDate: {
      type: Date,
      required: [true, "Add a start date"],
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
)

const Book = mongoose.model('Book', bookSchema)
export default Book