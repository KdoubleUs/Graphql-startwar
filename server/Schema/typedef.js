const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    hello(name: String): String
    getPerson(id: Int!): Person
  }
  type Films {
    title: String
    episode_id: String
    opening_crawl: String
    director: String
    producer: String
    release_date: String
  }
  type Person {
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
    films: [Films]
  }
`;

module.exports = { typeDefs };
