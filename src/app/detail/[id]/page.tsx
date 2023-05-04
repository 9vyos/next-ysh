import { getClient } from "@/app/apollo/apollo-client";
import { gql } from "@apollo/client";

export default async function Detail(props: any) {
  const query = gql`
  query {
    getOneProduct(productId:${props.params.id}){
        id
         name
        price
        description
        category{
          id
          name
          createdAt
          updatedAt
        }
        productImages{
          id
          imageUrl
          isMain
        } 
    }
  }
  `;
  const client = getClient();
  const { data } = await client.query({ query });
  console.log(data);
  return (
    <div>
      <h4>상세페이지임</h4>
      <h4>{data.getOneProduct.name}</h4>
      <p>{data.getOneProduct.description}</p>
    </div>
  );
}
