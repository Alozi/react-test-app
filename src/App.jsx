// import logo from "./logo.svg";
import "./App.css";

import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <header>
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
        <LoginForm />
      </main>
    </div>
  );
}

export default App;
