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
  const file = await this.findOne({ slug })
  if (!file) throw new Error('No file found')
  return file
}

fileSchema.statics.findAll = async function () {
  const files = await this.find({})
  if (!files) throw new Error('No files found')
  return files
}

fileSchema.statics.update = async function (file) {
  try {
    return this.findOneAndUpdate(
      { slug: file.slug },
      file,
      { upsert: true, setDefaultsOnInsert: true, new: true }
    )
  } catch (err) {
    throw new Error('Update failed')
  }
}

fileSchema.set('timestamps', true)

module.exports = mongoose.model('File', fileSchema)
