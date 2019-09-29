const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const dotenv = require('dotenv')
const resolvers = require('./resolvers')
const typeDefs = require('./typedefs')
const mongo = require('./models')

dotenv.config()

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
server.applyMiddleware({ app })

mongo.connectDb().then(async () => {
  app.listen({ port: process.env.PORT }, () =>
    console.log(
      `🚀 Ready at http://localhost:${process.env.PORT + server.graphqlPath}`
    )
  )
})
