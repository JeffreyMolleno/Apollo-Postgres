const massive = require("massive");

const connect = async () => {
  console.log('called');

  return await massive({
    host: "localhost",
    port: 5434,
    database: "library",
    user: "postgres",
    password: "admin",
  });
};

module.exports = connect;
