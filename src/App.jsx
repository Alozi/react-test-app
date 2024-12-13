import "./App.css";

import { useState } from "react";

import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import UserInfo from "./components/UserInfo";

function App() {
  const [accessToken, setAccessToken] = useState();
  const [user, setUser] = useState({
    login: false,
    name: "",
    email: "",
    profileImage: "",
  });

  return (
    <div className="App">
      <header>
        {user.login ? (
          <UserInfo
            accessToken={accessToken}
            setUser={setUser}
            name={user.name}
            email={user.email}
            image={user.profileImage}
          />
        ) : (
          <div>Please, login.</div>
        )}
        <p className="access-token">
          accessToken: {accessToken}
        </p>
      </header>
      <main>
        {user.login ? (
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
