"use client";
import { useState } from "react";

export default function Example() {
  let 상품이름 = ["사과", "바나나", "파인애플"];
  let [수량, 수량함수] = useState([0, 1, 2]);

  return (
    <>
      <h3>상품리스트</h3>

      {상품이름.map((name, i) => {
        return (
          <div key={i} style={{ display: "flex", justifyContent: "center" }}>
            <CartItem title={name} />
            <button
              onClick={() => {
                let copy = [...수량];
                copy[i]--;
                수량함수(copy);
              }}
            >
              -
            </button>
            <span>{수량[i]}</span>
            <button
              onClick={() => {
                let copy = [...수량];
                copy[i]++;
                수량함수(copy);
              }}
            >
              +
            </button>
          </div>
        );
      })}
    </>
  );

  function CartItem(props: any) {
    return <p>{props.title}</p>;
  }
}
