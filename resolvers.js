const { File } = require('./models')

module.exports = {
  Query: {
    file: (_, { slug }) => File.findBySlug(slug),
    files: () => File.findAll()
  }
}
