export default function Register() {
  return (
    <div>
      <form method="POST" action="/api/auth/login">
        <input name="email" type="text" placeholder="이메일" />
        <input name="password" type="text" placeholder="비번" />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
}
