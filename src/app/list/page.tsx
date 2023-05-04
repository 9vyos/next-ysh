import ListItem from "./ListItem";
import { gql } from "@apollo/client";
import { getClient } from "../apollo/apollo-client";

export default async function List() {
  const query = gql`
    query {
      getProducts {
        id
        name
        price
        description
        category {
          id
          name
          createdAt
          updatedAt
        }
        productImages {
          id
          imageUrl
          isMain
        }
      }
    }
  `;
  const client = getClient();
  const { data } = await client.query({ query });

  return (
    <div className="list-bg">
      <ListItem result={data.getProducts}></ListItem>
    </div>
  );
}
