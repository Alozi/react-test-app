import { useState } from "react";
import axios from "axios";

const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,10}$/g;

export default function LoginForm({ accessToken, setAccessToken }) {
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
      try {
        // console.log("try");

        const response = await axios.post(
          `https://dummy-api.d0.acom.cloud/api/auth/login?email=${email}&password=${password}`
        );
        // console.log("response");
        // console.log(response);

        // console.log("access_token");
        // console.log(response.data.access_token);

        setAccessToken(response.data.access_token);

        localStorage.setItem("access_token", response.data.access_token);


      } catch (error) {
        console.log(error);

        let errorMessage;
        if (error.response) {
          if (error.response.data.password !== undefined) {
            errorMessage = error.response.data.password[0];
          } else if (error.response.data.error !== undefined) {
            errorMessage = error.response.data.error;
          }
        } else {
          errorMessage = "Internal server error. Please try again later";
        }

        setDataErrorMessage((prevValues) => {
          return {
            ...prevValues,
            show: true,
            text: errorMessage,
          };
        });
      }
    }
  }

  return (
    <div className="login-form">
      <h1>Sign Up Here</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Username</label>
          <input
            type="email"
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
