import LoginForm from "./LoginForm";

export default function HomePage({ setAccessToken, apiUrl }) {
  return (
    <>
      <h2>Home</h2>
      <LoginForm setAccessToken={setAccessToken} apiUrl={apiUrl} />
    </>
  );
}
