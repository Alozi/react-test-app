import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";
import UserInfo from "./components/UserInfo";

const API_URL = "https://dummy-api.d0.acom.cloud/api/auth/";

function App() {
  const [accessToken, setAccessToken] = useState();
  const [user, setUser] = useState({
    login: false,
    name: "",
    email: "",
    profileImage: "",
  });

  async function getInfo() {
    console.log("getInfo");

    try {
      axios
        .get(`${API_URL}user-profile`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log("Data:", response.data);

          setUser(() => {
            return {
              login: true,
              name: response.data.name,
              email: response.data.email,
              profileImage: response.data.profile_image,
            };
          });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <header>
        {user.login ? (
          <UserInfo
            name={user.name}
            email={user.email}
            image={user.profileImage}
          />
        ) : (
          <div>Please, login.</div>
        )}

        <p className="access-token">
          accessToken: {accessToken} | user {user.login ? 'true' : 'false'}
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
                    apiUrl={API_URL}
                    getInfo={() => getInfo()}
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
