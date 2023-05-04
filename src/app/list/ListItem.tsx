"use client";
import Link from "next/link";

export default function ListItem(result: any) {
  const products = result.result;
  // console.log(products);
  return (
    // <div>
    //   {items.map((list: any, i: number) => (
    //     <div key={i} className="list-item">
    //       <Link href={"/detail/" + list.id}>
    //         <h4>{list.name}</h4>
    //       </Link>
    //       <Link href={"/edit/" + list.id}>✏️</Link>
    //       <span
    //         onClick={() => {
    //           fetch("/api/post/delete", {
    //             method: "DELETE",
    //             body: items[i]._id,
    //           }).then(() => {
    //             alert("삭제완료!");
    //           });
    //         }}
    //       >
    //         🗑️
    //       </span>
    //       <p>1월 1일</p>
    //     </div>
    //   ))}
    // </div>

    <div className="bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={"/detail/" + product.id}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.category.name}
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
