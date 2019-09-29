const { File } = require('../models')

module.exports = {
  Query: {
    file: async (_, { slug }) => File.findBySlug(slug),
    files: async () => File.findAll()
  },

  Mutation: {
    update: async (_, updatedContent) => File.update(updatedContent)
  }
}
