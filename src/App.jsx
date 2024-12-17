import "./App.css";

import { useState, useEffect } from "react";

import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import UserInfo from "./components/UserInfo";

function App() {
  const [accessToken, setAccessToken] = useState();
  const [isUserAuthorized, setIsUserAuthorized] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    profileImage: "",
  });

  useEffect(() => {
    console.log("sessionStorage.getItem");

    if (sessionStorage.getItem("access_token")) {
      setAccessToken(sessionStorage.getItem("access_token"));

      console.log(sessionStorage.getItem("access_token"));

      setIsUserAuthorized(true);
    }
  });

  return (
    <div className="App">
      isUserAuthorized: {isUserAuthorized ? "true" : "false"}
      <header>
        {isUserAuthorized ? (
          <UserInfo
            accessToken={accessToken}
            setUser={setUser}
            name={user.name}
            email={user.email}
            image={user.profileImage}
            setIsUserAuthorized={setIsUserAuthorized}
          />
        ) : (
          <div>Please, login.</div>
        )}
        <p className="access-token">accessToken: {accessToken}</p>
      </header>
      <main>
        {isUserAuthorized ? (
          <Dashboard accessToken={accessToken} />
        ) : (
          <LoginForm setAccessToken={setAccessToken} setUser={setUser} />
        )}
      </main>
      <footer>
        <p>
          Victoria Bogustka React Test App{" "}
          <a
            href="https://dummy-api.d0.acom.cloud/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://dummy-api.d0.acom.cloud/
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
