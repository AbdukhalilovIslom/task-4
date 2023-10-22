import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const base_url = "https://itransition-4-api.onrender.com";
  useEffect(() => {
    fetch(`${base_url}/users`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "true",
      },
    })
      .then((res) => res.json())
      .then((result) => console.log(result))
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
