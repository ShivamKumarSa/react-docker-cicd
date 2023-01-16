import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Welcome To My POC2</h1>
        <p className="App-link">
          On Github Actions, Docker And GCP Container Registry
        </p>
        <h5>By Shivam Sachdeva</h5>
      </header>
    </div>
  );
}

export default App;
