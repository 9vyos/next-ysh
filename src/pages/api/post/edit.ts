import { MongoClient, ObjectId } from "mongodb";
const url =
  "mongodb+srv://admin:qwer1234@cluster0.pvxvusg.mongodb.net/?retryWrites=true&w=majority";
// const options = { useNewUrlParser: true };
const dbName = "board-study";

export default async function handler(request: any, answer: any) {
  if (request.method == "POST") {
    let edit = { title: request.body.title, content: request.body.content };
    let client = await MongoClient.connect(url);
    let connectDB = client.db(dbName);

    // MongoDB 연결 완료
    console.log("Connected to MongoDB!");

    let collection = connectDB.collection("post");
    let result = await collection.updateOne(
      { _id: new ObjectId(request.body._id) },
      { $set: edit }
    );

    console.log(result);

    return answer.status(302).redirect("/list"); //post할때만
  }
}
