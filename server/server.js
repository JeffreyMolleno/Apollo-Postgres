const massive = require("massive");
const express = require("express");
const cors = require("cors");

const typeDefs = require('./schema')
const resolvers = require("./resolvers");

const { ApolloServer, gql } = require("apollo-server-express");

const connect = massive({
  host: "localhost",
  port: 5434,
  database: "library",
  user: "postgres",
  password: "admin",
})

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => ({
    db: await connect
  }),
});

app.use(cors());

server.applyMiddleware({ app, path: "/graphql" });

const PORT = 4000;

app.listen(PORT, () => {
  console.log("now listening for request on port ", PORT);
});
