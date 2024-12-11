// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import HomePage from "./components/HomePage";
import Dashboard from "./components/Dashboard";

function App() {
  const [accessToken, setAccessToken] = useState();

  console.log("accessToken");
  console.log(accessToken);

  // console.log("response2");
  // const response2 = await axios.get(
  //   `https://dummy-api.d0.acom.cloud/api/auth/user-profile`
  // );
  // console.log(response2);

  return (
    <div className="App">
      <header>
        <p className="access-token">accessToken: {accessToken}</p>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
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
                    accessToken={accessToken}
                    setAccessToken={setAccessToken}
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
    </div>
  );
}

export default App;
