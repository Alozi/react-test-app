import LoginForm from "./LoginForm";

export default function HomePage({ setAccessToken, apiUrl, getInfo }) {
  return (
    <>
      <h2>Home</h2>
      <LoginForm setAccessToken={setAccessToken} apiUrl={apiUrl} getInfo={() => getInfo()} />
    </>
  );
}
