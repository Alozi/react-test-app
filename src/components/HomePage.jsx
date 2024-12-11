import LoginForm from "./LoginForm";

export default function HomePage({ accessToken, setAccessToken }) {
  return (
    <>
      <h2>Home</h2>
      <LoginForm accessToken={accessToken} setAccessToken={setAccessToken} />
    </>
  );
}
