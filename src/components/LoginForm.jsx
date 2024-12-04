import { useState } from "react";
import axios from "axios";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  console.log(email);
  console.log(password);

  async function handleLogin(e) {
    e.preventDefault();

    console.log("test");

    try {
      const requestBody = { email, password };
      console.log("requestBody");
      console.log(requestBody);

      console.log(
        `https://dummy-api.d0.acom.cloud/api/auth/login?email=${email}&password=${password}`
      );

      const response = await axios.post(
        `https://dummy-api.d0.acom.cloud/api/auth/login?email=${email}&password=${password}`
      );

      localStorage.setItem("access_token", response.data.access_token);

      console.log("response");
      console.log(response);
    } catch (error) {
      console.log("error");
      console.log(error);
      console.log(error.response.data);
      setErrorMessage(error.response.data.error);
    }
  }

  return (
    <div className="login-form">
      <h1>Login</h1>
      <p className="error-message">{errorMessage}</p>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="email"
            id="username"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <button>Sign In</button>
      </form>
    </div>
  );
}
