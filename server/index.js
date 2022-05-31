const { ApolloServer, gql } = require("apollo-server-express");
const mongoose = require("mongoose");
const express = require("express");
const { typeDefs } = require("../server/Schema/typedef");
const { resolvers } = require("./Schema/resolver");
const startServer = async () => {
  const app = express();
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log(`listening on port 4000`);
  });
};

startServer(() => console.log(`listening on apollo server`));
