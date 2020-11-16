import logo from "./logo.svg";
import "./App.css";
import MyList from "./MyList.jsx";

function App() {
  return (
    <div className="app">
      <h1 style={{ color: "black" }}>Here are a list of penguins!</h1>
      <p> Click on one that you want to see thr color changed!</p>
      <MyList />
    </div>
  );
}

export default App;
