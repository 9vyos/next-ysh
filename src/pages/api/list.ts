import { MongoClient } from "mongodb";

export default async function handler(request: any, answer: any) {
  const url =
    "mongodb+srv://admin:qwer1234@cluster0.pvxvusg.mongodb.net/?retryWrites=true&w=majority";
  // const options = { useNewUrlParser: true };
  const dbName = "board-study";

  const client = await MongoClient.connect(url);
  const connectDB = client.db(dbName);

  // MongoDB 연결 완료
  console.log("Connected to MongoDB!");

  const collection = connectDB.collection("post");
  const result = await collection.find().toArray();

  // 조회된 사용자 정보 출력
  console.log(result);

  return answer.status(200).json(result);
}
