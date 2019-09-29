const mongoose = require('mongoose')
const File = require('./file')

const connectDb = () => {
  mongoose.set('useUnifiedTopology', true)
  mongoose.set('useNewUrlParser', true)
  mongoose.set('useCreateIndex', true)
  return mongoose.connect(process.env.DATABASE_URL)
}

module.exports = { connectDb, File }
