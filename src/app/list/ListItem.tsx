"use client";

import Link from "next/link";

export default function ListItem(result: any) {
  //   console.log(result.result);
  let items = result.result;
  return (
    <div>
      {items.map((list: any, i: number) => (
        <div key={i} className="list-item">
          <Link href={"/detail/" + list._id}>
            <h4>{list.title}</h4>
          </Link>
          <Link href={"/edit/" + list._id}>✏️</Link>
          <span
            onClick={() => {
              fetch("/api/post/delete", {
                method: "DELETE",
                body: items[i]._id,
              }).then(() => {
                alert("삭제완료!");
              });
            }}
          >
            🗑️
          </span>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
