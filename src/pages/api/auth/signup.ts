import { getClient } from "@/app/apollo/apollo-client";
import { gql } from "@apollo/client";

export default async function handler(request: any, answer: any) {
  if (request.method == "POST") {
    console.log(request.body);
    return answer.status(200).json("처리완료", request.body.email); //post할때만
  }
}
