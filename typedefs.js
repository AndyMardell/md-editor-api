const { gql } = require('apollo-server-express')

module.exports = gql`
  type Query {
    file(slug: String!): File
    files: [File]
  }

  type File {
    slug: String!
    name: String!
    contents: String
  }
`
