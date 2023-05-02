import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://admin:qwer1234@cluster0.pvxvusg.mongodb.net/?retryWrites=true&w=majority";
// const options = { useNewUrlParser: true };
const dbName = "board-study";

export default async function handler(request: any, answer: any) {
  const client = await MongoClient.connect(url);
  const connectDB = client.db(dbName);

  // MongoDB 연결 완료
  console.log("Connected to MongoDB!");

  const collection = connectDB.collection("post");
  const result = await collection.insertOne(request.body);

  if (request.method == "POST") {
    return answer.status(200).redirect("/list"); //post할때만
  }
}
