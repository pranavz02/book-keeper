import mongoose from 'mongoose'

const MONGODB_URI = 'mongodb+srv://ayushborage28:iamayush%4028@cluster0.urdh9hp.mongodb.net/'
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(MONGODB_URI)
    console.log(
      "Database connected: ",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err)
    return
  }
}

export default connectDb