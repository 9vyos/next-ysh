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
    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          {data.getOneProduct.name}
        </h2>
        <p>카테고리 : {data.getOneProduct.category.name}</p>
        <p>가격 : {data.getOneProduct.price}</p>
        <p>설명 : {data.getOneProduct.description}</p>
      </div>
    </div>
  );
}
