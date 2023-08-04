import mongoose from 'mongoose'

const MONGODB_URI = ''
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