import { getClient } from "@/app/apollo/apollo-client";
import { gql } from "@apollo/client";

// interface Request {
//   body: {
//     id: Number;
//     name: String;
//     price: Number;
//     description: String;
//   };
// }

export default async function handler(request: any, answer: any) {
  if (request.method == "POST") {
    const requestBody = JSON.parse(JSON.stringify(request.body));
    let id = requestBody.id as number;
    let name = requestBody.name as string;
    let price = requestBody.price as number;
    let description = requestBody.description as string;

    const query = gql`
    mutation {
      updateProduct(
        productId: ${id}
        request: {
          name: "${name}"
          price: ${price}
          description: "${description}"
        }
      ) {
        id
        name
        price
        description
      }
    }
    `;

    const client = getClient();
    const { data } = await client.mutate({ mutation: query });
    console.log(data);

    return answer.status(302).redirect("/list"); //post할때만
  }
}
