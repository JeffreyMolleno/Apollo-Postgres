const resolvers = {
  Query: {
    books(parent, args, context, info) {
      return context.db.query("SELECT * FROM books");
    },
    async book(parent, args, context, info) {
      const res = await context.db.books.where(`id=${args.id}`);
      return res[0];
    },
    authors(parent, args, context, info) {
      return context.db.query("SELECT * FROM authors");
    },
    async author(parent, args, context, info) {
      const res = await context.db.authors.where(`id=${args.id}`);
      return res[0];
    },
  },
  Book: {
    async author(parent, args, context, info) {
      const res = await context.db.authors.where(`id=${parent.id}`);
      console.log(res);
      return res[0];
    },
  },
  Author: {
    async books(parent, args, context, info) {
      const res = await context.db.books.where(`author_id=${parent.id}`);
      console.log(res);
      return res;
    },
  },
  Mutation: {
    async addBook(parent, args, context, info) {
      return await context.db.books.insert({
        title: args.title,
        genre: args.genre,
        author_id: args.author_id,
      });
    },
    async addAuthor(parent, args, context, info) {
      const res = await context.db.authors.insert({
        name: args.name,
        age: args.age,
      });

      return {
        message: "success",
        result: { ...res },
      };
    },
  },
};

module.exports = resolvers;
