"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function DetailLink(id: any) {
  let router = useRouter();
  //   let router = usePathname(); // 현재 URL 출력
  //   let router = useSearchParams(); // 쿼리스트링 출력
  return (
    <button
      onClick={() => {
        router.push("/detail/" + id.id);
      }}
    >
      버튼
    </button>
  );
  //   router.back // 뒤로가기
  //   router.forward // 앞으로가기
  //   router.refresh // 소프트 새로고침(변동있는 일부분만 새로고침)
  //   router.prefetch // 페이지 미리로드 ==> <Link>에 기능 내장되어있음
}
