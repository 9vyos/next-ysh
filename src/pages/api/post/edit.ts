import { getClient } from "@/app/apollo/apollo-client";
import { gql } from "@apollo/client";

export default async function handler(request: any, answer: any) {
  console.log("request", request.body);
  let id = Number(request.body.id);
  let price = Number(request.body.price);
  console.log(request.body.id, "////", id);
  const query = gql`
    mutation {
      updateProduct(
        productId: ${id}
        request: {
          name: ${request.body.name}
          price: ${price}
          description: ${request.body.description}
        }
      ) {
        id
        name
        price
        description
      }
    }
  `;

  if (request.method == "POST") {
    const client = getClient();
    const { data } = await client.mutate({ mutation: query });
    console.log(data);

    return answer.status(302).redirect("/list"); //post할때만
  }
}
