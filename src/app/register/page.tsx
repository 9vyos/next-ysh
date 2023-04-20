export default function Register() {
  return (
    <div>
      <form method="POST" action="/api/auth/signup">
        <input name="email" type="text" placeholder="이메일" />
        <input name="password" type="text" placeholder="비번" />
        <input name="name" type="text" placeholder="이름" />
        <input name="userType" value={"GUEST"} type="text" placeholder="타입" />
        <button type="submit">id/pw 가입요청</button>
      </form>
    </div>
  );
}
