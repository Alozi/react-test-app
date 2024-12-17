import "./App.css";

import axios from "axios";
import { useState, useEffect } from "react";

import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";
import UserInfo from "./components/UserInfo";

function App() {
  const [isUserAuthorized, setIsUserAuthorized] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    profileImage: "",
  });

  useEffect(() => {
    axios
      .get(`https://dummy-api.d0.acom.cloud/api/auth/user-profile`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
        },
      })
      .then((response) => {
        // console.log("Data:", response.data);
        setIsUserAuthorized(true);
      })
      .catch((error) => {
        // console.error("Error:", error);
        if (error.response.status === 401) {
          setIsUserAuthorized(false);
        }
      });
  });

  return (
    <div className="App">
      <header>
        {isUserAuthorized ? (
          <UserInfo
            setUser={setUser}
            name={user.name}
            email={user.email}
            image={user.profileImage}
            setIsUserAuthorized={setIsUserAuthorized}
          />
        ) : (
          <div>Please, login</div>
        )}
      </header>
      <main>
        {isUserAuthorized ? (
          <Dashboard />
        ) : (
          <LoginForm setUser={setUser} />
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
