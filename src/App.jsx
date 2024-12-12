import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";

const API_URL = "https://dummy-api.d0.acom.cloud/api/auth/";

function App() {
  const [accessToken, setAccessToken] = useState();

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
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  if (accessToken) {
    getInfo();
  }

  return (
    <div className="App">
      <header>
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
      </header>
      <main>
        <p className="access-token">accessToken: {accessToken}</p>

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
                  <HomePage setAccessToken={setAccessToken} apiUrl={API_URL} />
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
    </div>
  );
}

export default App;
