import mongoose from "mongoose"

const bookSchema = mongoose.Schema(
  {
    name: {
      type: String,
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