export default function handler(요청: any, 응답: any) {
  console.log(요청);
  if (요청.method == "GET") {
    return 응답.status(200).json({ name: "안녕" });
  }
  if (요청.method == "POST") {
    return 응답.status(200).json("처리완료"); //post할때만
  }
}
