const resolvers = {
  Person: {
    films: parent => {
      const promises = parent.map(async url => {
        const response = await fetch(url);
        return response.json();
      });
      return Promise.all(promises);
    },
  },
  Query: {
    hello: (parents, args) => {
      return "hi";
    },
    getPerson: async id => {
      const response = await fetch(`https://swapi.dev/api/people/${id}/`);
      return response.json();
    },
  },
};

module.exports = { resolvers };
