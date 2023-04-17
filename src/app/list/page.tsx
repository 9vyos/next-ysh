import { MongoClient } from "mongodb";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
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

  return (
    <div className="list-bg">
      {result.map((list, i) => (
        <div key={i} className="list-item">
          {/* <DetailLink id={list._id}></DetailLink> */}
          <Link href={"/detail/" + list._id}>
            <h4>{list.title}</h4>
          </Link>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
