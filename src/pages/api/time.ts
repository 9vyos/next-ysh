export default async function handler(request: any, answer: any) {
  const newDate = new Date();
  const kr_utcTime =
    newDate.getTime() - newDate.getTimezoneOffset() * 60 * 1000;
  const kr_date = new Date(kr_utcTime);

  const year: number = kr_date.getFullYear();
  const month: number = kr_date.getMonth();
  const date: number = kr_date.getDate();
  const hour: number = kr_date.getHours();
  const minute: number = kr_date.getMinutes();
  const second: number = kr_date.getSeconds();

  console.log(year, month, date, hour, minute, second);

  return answer
    .status(200)
    .json(
      year +
        "년 " +
        month +
        "월 " +
        date +
        "일 " +
        hour +
        "시 " +
        minute +
        "분 " +
        second +
        "초"
    );
}
