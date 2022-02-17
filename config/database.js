const mongoose = require('mongoose');
const URI = process.env.NODE_ENV === 'development' ? process.env.DB_URI_TEST : process.env.DB_URI;

async function connectDB() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = connectDB;
