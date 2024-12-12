import LoginForm from "./LoginForm";

export default function HomePage({ setAccessToken, setUser }) {
  return (
    <>
      <h2>Home</h2>
      <LoginForm setAccessToken={setAccessToken} setUser={setUser} />
    </>
  );
}
