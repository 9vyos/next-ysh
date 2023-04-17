import { MongoClient, ObjectId } from "mongodb";

export default async function Detail(props: any) {
  const url =
    "mongodb+srv://admin:qwer1234@cluster0.pvxvusg.mongodb.net/?retryWrites=true&w=majority";
  // const options = { useNewUrlParser: true };
  const dbName = "board-study";

  const client = await MongoClient.connect(url);
  const connectDB = client.db(dbName);

  // MongoDB 연결 완료
  console.log("Connected to MongoDB!");

  interface DetailPosts {
    _id: ObjectId;
    title: String;
    content: String;
  }

  const collection = connectDB.collection("post");
  const result = (await collection.findOne({
    _id: new ObjectId(props.params.id),
  })) as DetailPosts;

  // 조회된 사용자 정보 출력
  // console.log(result.title);

  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{result.title}</h4>
      <p>{result.content}</p>
    </div>
  );
}
