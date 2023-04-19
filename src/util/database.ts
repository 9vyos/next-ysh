import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://admin:qwer1234@cluster0.pvxvusg.mongodb.net/?retryWrites=true&w=majority";
// const options = { useNewUrlParser: true };
const dbName = "board-study";
let connectDB: any;

async () => {
  const client = await MongoClient.connect(url);
  connectDB = client.db(dbName);

  // MongoDB 연결 완료
  console.log("Connected to MongoDB!");
};
export { connectDB };
