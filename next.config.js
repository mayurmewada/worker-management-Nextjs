import password from "./password";

module.exports = {
  env: {
    MONGO_URL: `mongodb+srv://workerslist:${password}@cluster0.dneho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  },
};
