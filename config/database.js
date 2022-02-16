const mongoose = require('mongoose');
const { DB_URI, DB_URI_TEST, NODE_ENV } = process.env;
console.log('nodeenv', NODE_ENV)
const URI = NODE_ENV === 'development' ? DB_URI : DB_URI_TEST;
console.log('uri', URI)

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
