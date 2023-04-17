import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://admin:qwer1234@cluster0.pvxvusg.mongodb.net/?retryWrites=true&w=majority";
const options = { useNewUrlParser: true };
let client;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  client = global._mongo;
} else {
  client = new MongoClient(url, options).connect();
}
export { client };
