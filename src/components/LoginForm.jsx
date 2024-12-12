import { useState } from "react";
import { userLogin, getUserInfo } from "../server.js";

const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/g;

export default function LoginForm({ setAccessToken, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessages, setShowErrorMessages] = useState({
    email: "",
    password: "",
  });
  const [dataErrorMessage, setDataErrorMessage] = useState({
    show: false,
    text: "",
  });

  async function handleLogin(e) {
    e.preventDefault();

    setDataErrorMessage((prevValues) => {
      return {
        ...prevValues,
        text: "",
      };
    });

    if (email && email.length && email.match(isValidEmail)) {
      setShowErrorMessages((prevValues) => {
        return {
          ...prevValues,
          email: false,
        };
      });
    } else {
      setShowErrorMessages((prevValues) => {
        return {
          ...prevValues,
          email: true,
        };
      });
    }

    if (password) {
      setShowErrorMessages((prevValues) => {
        return {
          ...prevValues,
          password: false,
        };
      });
    } else {
      setShowErrorMessages((prevValues) => {
        return {
          ...prevValues,
          password: true,
        };
      });
    }

    if (email && email.length && email.match(isValidEmail) && password) {
      userLogin(
        email,
        password,
        setAccessToken,
        getUserInfo,
        setUser,
        setDataErrorMessage
      );
    }
  }

  return (
    <div className="login-form">
      <h1>Sign Up Here</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Username</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {showErrorMessages.email ? (
            <p className="error-message">Email is not valid</p>
          ) : (
            ""
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {showErrorMessages.password ? (
            <p className="error-message">Password shoudn't be empty</p>
          ) : (
            ""
          )}
        </div>
        {dataErrorMessage.show ? (
          <p className="error-message">{dataErrorMessage.text}</p>
        ) : (
          ""
        )}
        <button>Sign In</button>
      </form>
    </div>
  );
}
