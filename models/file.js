const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
  slug: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    unique: true
  },
  contents: {
    type: String,
    unique: false
  }
})

fileSchema.statics.findBySlug = async function (slug) {
  const file = await this.findOne({ slug: slug })
  if (!file) throw new Error('No file found')
  return file
}

fileSchema.statics.findAll = async function () {
  const files = await this.find({})
  if (!files) throw new Error('No files found')
  return files || false
}

const File = mongoose.model('File', fileSchema)

module.exports = File
