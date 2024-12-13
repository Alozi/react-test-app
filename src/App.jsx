import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import HomePage from "./components/HomePage";
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
          accessToken: {accessToken} | user {user.login ? "true" : "false"}
        </p>
      </header>
      <main>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">HomePage</Link>
                </li>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    setAccessToken={setAccessToken}
                    setUser={setUser}
                    // apiUrl={API_URL}
                    // getInfo={() => getInfo()}
                  />
                }
              />
              <Route
                path="/dashboard"
                element={<Dashboard accessToken={accessToken} />}
              />
            </Routes>
          </div>
        </Router>
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
