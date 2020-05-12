const resolvers = {
  Query: {
    books(parent, args, context, info) {
      return context.db.query("SELECT * FROM books");
    },
    authors(parent, args, context, info) {
      return context.db.query("SELECT * FROM authors");
    },
  },
};

module.exports = resolvers;
