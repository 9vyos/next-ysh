import { MongoClient, ObjectId } from "mongodb";

export default async function Edit(props: any) {
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

  console.log(result.title);

  await connectDB
    .collection("post")
    .updateOne(
      { _id: new ObjectId(props.params.id) },
      { $set: { title: "수정된 제목" } }
    );

  return (
    <div>
      <h4>수정페이지</h4>
      <form action="/api/post/edit" method="POST">
        <div className="grid gap-6 mb-6 ">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              TITLE
            </label>
            <input
              name="title"
              defaultValue={result.title.toString()}
              id="first_name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              CONTENT
            </label>
            <textarea
              name="content"
              defaultValue={result.content.toString()}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <input name="_id" defaultValue={result._id.toString()} />
          <button type="submit">수정</button>
        </div>
      </form>
    </div>
  );
}
