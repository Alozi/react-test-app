import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Victoria Bogustka React Test App{" "}
          <a
            className="App-link"
            href="https://dummy-api.d0.acom.cloud/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://dummy-api.d0.acom.cloud/
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
