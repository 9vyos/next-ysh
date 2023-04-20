import { getClient } from "./../../app/apollo/apollo-client";
import { gql } from "@apollo/client";

export default async function handler(request: any, answer: any) {
  const query = gql`
    mutation {
      login(
        loginUserRequest: { email: "${request.body.email}", password: "${request.body.password}" }
      ) {
        userId
        jwtToken
      }
    }
  `;

  const client = getClient();
  const { data } = await client.mutate({ mutation: query });
  console.log(data.login.jwtToken);

  return answer.status(200).json(data.login.jwtToken);
}
