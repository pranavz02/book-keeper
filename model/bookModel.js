import mongoose from "mongoose"

const bookSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    author: {
      type: String,
    },
    startDate: {
      type: Date,
      required: true,
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